/* =========================================================
   =================== 可调参数区（11项） ===================
   ========================================================= */

/* -------- 左侧 G-G 图 -------- */
const GG_CIRCLE_COUNT = 15;      // 1 同心圆数量
const GG_CIRCLE_SPACING = 15;    // 2 同心圆视觉间距(px)
const GG_TICK_VALUE = 1;         // 3 每圈刻度代表多少 m/s²

/* -------- 右侧网格 -------- */
const GRID_COL_COUNT = 20;       // 4 横向网格数量（左右各）
const GRID_ROW_COUNT = 15;       // 5 纵向网格数量（上下各）
const GRID_SPACING = 40;         // 6 网格视觉间距(px)
const KAPPA_PER_GRID = 0.005;    // 7 横向每格曲率单位
const AT_PER_GRID = 1;           // 8 纵向每格加速度单位

/* -------- 系统控制 -------- */
const FIXED_HZ = 240;            // 9 物理采样率(Hz)
const INPUT_FILTER = 12;         // 10 输入滤波系数
const DISPLAY_FILTER = 10;       // 11 显示滤波系数


/* =========================================================
   ====================== 系统核心 ==========================
   ========================================================= */

const joystick = document.getElementById("joystick");
const floatingInfo = document.getElementById("floatingInfo");

const atSpan = document.getElementById("at");
const vSpan = document.getElementById("v");
const RSpan = document.getElementById("R");
const acSpan = document.getElementById("ac");
const aTotalSpan = document.getElementById("aTotal");
const kappaSpan = document.getElementById("kappa");

const ggCanvas = document.getElementById("ggCanvas");
const ggCtx = ggCanvas.getContext("2d");

const gridCanvas = document.getElementById("gridCanvas");
const gridCtx = gridCanvas.getContext("2d");

const FIXED_DT = 1 / FIXED_HZ;

let accumulator = 0;
let lastTime = performance.now();

/* ---------- 物理状态 ---------- */

let centerX = 0, centerY = 0;

let joyX = 0, joyY = 0;
let targetJoyX = 0, targetJoyY = 0;

let at = 0, v = 0, R = Infinity, ac = 0, aTotal = 0, kappa = 0;

let displayAt = 0, displayAc = 0;

let dragging = false;
let grabOffsetX = 0, grabOffsetY = 0;

let joystickInitialized = false;

/* =========================================================
   ====================== 物理计算 ==========================
   ========================================================= */

function updatePhysics(dt) {

    v += at * dt;

    ac = (R !== Infinity) ? v * v / R : 0;
    aTotal = Math.sqrt(at * at + ac * ac);
}

function updateDerivedValues() {

    const dx = joyX - centerX;
    const dy = joyY - centerY;

    const atPerPx = AT_PER_GRID / GRID_SPACING;
    const kappaPerPx = KAPPA_PER_GRID / GRID_SPACING;

    at = -dy * atPerPx;

    const curvature = dx * kappaPerPx;

    if (Math.abs(curvature) < 1e-6) {
        R = Infinity;
        kappa = 0;
    } else {
        R = 1 / curvature;
        kappa = curvature;
    }
}

/* =========================================================
   ====================== 渲染层 ============================
   ========================================================= */

function drawGG() {

    const ctx = ggCtx;
    const w = ggCanvas.width;
    const h = ggCanvas.height;

    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";

    for (let i = 1; i <= GG_CIRCLE_COUNT; i++) {

        const r = i * GG_CIRCLE_SPACING;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillText(
            (i * GG_TICK_VALUE).toString(),
            cx + 4,
            cy - r - 4
        );
    }

    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.stroke();

    const x = displayAc * (GG_CIRCLE_SPACING / GG_TICK_VALUE);
    const y = -displayAt * (GG_CIRCLE_SPACING / GG_TICK_VALUE);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(cx + x, cy + y, 5, 0, Math.PI * 2);
    ctx.fill();
}

function drawGrid() {

    const rect = joystick.parentElement.getBoundingClientRect();
    gridCanvas.width = rect.width;
    gridCanvas.height = rect.height;

    const ctx = gridCtx;
    const w = gridCanvas.width;
    const h = gridCanvas.height;

    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    centerX = cx;
    centerY = cy;

    if (!joystickInitialized) {
        joyX = cx;
        joyY = cy;
        targetJoyX = cx;
        targetJoyY = cy;
        joystickInitialized = true;
    }

    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";

    for (let i = -GRID_COL_COUNT; i <= GRID_COL_COUNT; i++) {
        const x = cx + i * GRID_SPACING;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();

        if (i !== 0)
            ctx.fillText(
                (i * KAPPA_PER_GRID).toFixed(3),
                x + 2,
                cy - 4
            );
    }

    for (let j = -GRID_ROW_COUNT; j <= GRID_ROW_COUNT; j++) {
        const y = cy + j * GRID_SPACING;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        if (j !== 0)
            ctx.fillText(
                (-j * AT_PER_GRID).toFixed(1),
                cx + 4,
                y - 2
            );
    }

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.stroke();
    ctx.lineWidth = 1;
}

/* =========================================================
   ====================== UI 更新 ============================
   ========================================================= */

function updateUI() {

    joystick.style.left = joyX + "px";
    joystick.style.top = joyY + "px";

    floatingInfo.style.left = joyX + 15 + "px";
    floatingInfo.style.top = joyY + 15 + "px";

    floatingInfo.innerHTML =
        `at: ${at.toFixed(2)} m/s²<br>` +
        `R: ${R === Infinity ? "∞" : R.toFixed(2)} m<br>` +
        `κ: ${kappa.toFixed(4)} 1/m`;

    atSpan.textContent = at.toFixed(2);
    vSpan.textContent = v.toFixed(2);
    RSpan.textContent = R === Infinity ? "∞" : R.toFixed(2);
    acSpan.textContent = ac.toFixed(2);
    aTotalSpan.textContent = aTotal.toFixed(2);
    kappaSpan.textContent = kappa.toFixed(4);
}

/* =========================================================
   ====================== 主循环 =============================
   ========================================================= */

function animate() {

    const now = performance.now();
    const frameDt = (now - lastTime) / 1000;
    lastTime = now;

    accumulator += frameDt;

    while (accumulator >= FIXED_DT) {

        // 摇杆不滤波，摇杆严格跟随鼠标
        joyX = targetJoyX;
        joyY = targetJoyY;

        updateDerivedValues();
        updatePhysics(FIXED_DT);

        // 显示平滑，只对显示滤波
        displayAt += (at - displayAt) * DISPLAY_FILTER * FIXED_DT;
        displayAc += (ac - displayAc) * DISPLAY_FILTER * FIXED_DT;

        accumulator -= FIXED_DT;
    }

    updateUI();
    drawGG();
    drawGrid();

    requestAnimationFrame(animate);
}

animate();

/* =========================================================
   ====================== 交互 ===============================
   ========================================================= */

joystick.addEventListener("mousedown", (e) => {

    dragging = true;

    const joyRect = joystick.getBoundingClientRect();

    grabOffsetX = e.clientX - (joyRect.left + joyRect.width / 2);
    grabOffsetY = e.clientY - (joyRect.top + joyRect.height / 2);

    joystick.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {

    dragging = false;
    joystick.style.cursor = "grab";

    joyX = centerX;
    joyY = centerY;

    targetJoyX = centerX;
    targetJoyY = centerY;

    updateDerivedValues();
});

document.addEventListener("mousemove", (e) => {

    if (!dragging) return;

    const rect = joystick.parentElement.getBoundingClientRect();

    targetJoyX = e.clientX - rect.left - grabOffsetX;
    targetJoyY = e.clientY - rect.top - grabOffsetY;
});