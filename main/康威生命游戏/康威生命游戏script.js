const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 20;
let cols = Math.floor(canvas.width / cellSize);
let rows = Math.floor(canvas.height / cellSize);
let fps = 50;

let grid = createGrid();
let running = false;
let undoStack = [];
let redoStack = [];

function buildToolbar() {
    const container = document.getElementById('toolbar');
    patternCategories.forEach(cat => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = cat.name;
        details.appendChild(summary);
        cat.items.forEach(key => {
            const div = document.createElement('div');
            div.className = 'item';
            div.draggable = true;
            div.dataset.type = key;
            div.textContent = patternLabels[key] || key;
            details.appendChild(div);
        });
        container.appendChild(details);
    });
}
buildToolbar();

function createGrid() { return Array.from({ length: cols }, () => Array(rows).fill(0)); }

function applySize() {
    const w = parseInt(document.getElementById('widthInput').value);
    const h = parseInt(document.getElementById('heightInput').value);
    if (w === canvas.width && h === canvas.height) { draw(); return; }
    canvas.width = w;
    canvas.height = h;
    cols = Math.floor(w / cellSize);
    rows = Math.floor(h / cellSize);
    grid = createGrid();
    draw();
}

function updateFps() {
    fps = parseInt(document.getElementById('fpsInput').value);
}

function saveState() {
    undoStack.push(JSON.stringify(grid));
    redoStack = [];
}

function undo() {
    if (undoStack.length > 0) {
        redoStack.push(JSON.stringify(grid));
        grid = JSON.parse(undoStack.pop());
        draw();
    }
}

function redo() {
    if (redoStack.length > 0) {
        undoStack.push(JSON.stringify(grid));
        grid = JSON.parse(redoStack.pop());
        draw();
    }
}

function draw(ghostPattern = null, gx = 0, gy = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cellW = canvas.width / cols;
    const cellH = canvas.height / rows;

    ctx.strokeStyle = '#222';
    ctx.beginPath();
    for (let i = 0; i <= cols; i++) { ctx.moveTo(i*cellW,0); ctx.lineTo(i*cellW, canvas.height); }
    for (let j = 0; j <= rows; j++) { ctx.moveTo(0, j*cellH); ctx.lineTo(canvas.width, j*cellH); }
    ctx.stroke();

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j]) { ctx.fillStyle = '#00ffcc'; ctx.fillRect(i*cellW+1, j*cellH+1, cellW-2, cellH-2); }
        }
    }
    if (ghostPattern) {
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ghostPattern.forEach(([dx, dy]) => {
            if (gx+dx < cols && gy+dy < rows) ctx.fillRect((gx+dx)*cellW+1, (gy+dy)*cellH+1, cellW-2, cellH-2);
        });
    }
}

function update() {
    let next = createGrid();
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let sum = 0;
            for (let x = -1; x < 2; x++) {
                for (let y = -1; y < 2; y++) {
                    let c = i + x, r = j + y;
                    if (c >= 0 && c < cols && r >= 0 && r < rows) sum += grid[c][r];
                }
            }
            sum -= grid[i][j];
            if (grid[i][j] === 1 && (sum < 2 || sum > 3)) next[i][j] = 0;
            else if (grid[i][j] === 0 && sum === 3) next[i][j] = 1;
            else next[i][j] = grid[i][j];
        }
    }
    grid = next;
    draw();
    if (running) setTimeout(() => requestAnimationFrame(update), 1000/fps);
}

canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (rect.width / cols));
    const y = Math.floor((e.clientY - rect.top) / (rect.height / rows));
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
        saveState();
        grid[x][y] = grid[x][y] ? 0 : 1;
        draw();
    }
});

let draggedType = null;
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', e => { draggedType = e.target.dataset.type; });
});

canvas.addEventListener('dragover', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (rect.width / cols));
    const y = Math.floor((e.clientY - rect.top) / (rect.height / rows));
    draw(patterns[draggedType], x, y);
});

canvas.addEventListener('drop', e => {
    e.preventDefault();
    saveState();
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (rect.width / cols));
    const y = Math.floor((e.clientY - rect.top) / (rect.height / rows));
    if(patterns[draggedType]) {
        patterns[draggedType].forEach(([dx, dy]) => { if (x+dx < cols && y+dy < rows) grid[x+dx][y+dy] = 1; });
    }
    draw();
});

window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'z') undo();
    if (e.ctrlKey && e.key === 'y') redo();
    if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); toggleRunning(); }
});

function toggleRunning() {
    running = !running;
    const btn = document.getElementById('runBtn');
    btn.innerText = running ? '暂停' : '开始';
    btn.className = running ? 'btn-pause' : 'btn-start';
    if (running) update();
}

function clearGrid() {
    if (!confirm('确定要清空画布吗？')) return;
    saveState(); grid = createGrid(); draw();
}

draw();
