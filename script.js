// 在这里填写你的项目名称和对应的 URL
const projects = [
    { name: "本页面", url: "index.html" },
    { name: "何意味", url: "main/何意味/何意味.html" },
    { name: "我要验牌", url: "main/我要验牌/我要验牌.html" },
    { name: "F1起跑反应测试🏎️", url: "main/F1反应测试/F1反应测试.html" },
    { name: "键盘钢琴", url: "main/钢琴/钢琴.html" },
    { name: "赛车摩擦圆模拟🏎️", url: "main/赛车摩擦圆模拟/赛车摩擦圆模拟.html" },
    { name: "汉诺塔演示", url: "main/汉诺塔演示器/汉诺塔演示器.html" },
    { name: "⭐我的SolidWorks建模作品⭐", url: "main/SW/SW首页.html" },
    { name: "ICO图标尺寸查看器", url: "main/小工具/ico尺寸查看器/ico尺寸查看器.html" },
    { name: "康威生命游戏", url: "main/康威生命游戏/康威生命游戏.html" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
];

// 缤纷配色循环表（每张卡片一种主色）
const PALETTE = [
    { from: '#ff8a65', to: '#ff3d68' },  // 珊瑚红
    { from: '#ffb74d', to: '#ff6f00' },  // 蜜橙
    { from: '#ffd54f', to: '#ff9800' },  // 暖黄
    { from: '#aed581', to: '#43a047' },  // 嫩绿
    { from: '#4dd0e1', to: '#00838f' },  // 青蓝
    { from: '#64b5f6', to: '#1a7a9e' },  // 天蓝
    { from: '#9575cd', to: '#5e35b1' },  // 紫罗兰
    { from: '#f06292', to: '#c2185b' },  // 玫粉
    { from: '#ff80ab', to: '#d81b60' },  // 桃粉
    { from: '#7986cb', to: '#3949ab' },  // 靛蓝
    { from: '#4db6ac', to: '#00695c' },  // 碧绿
    { from: '#ff7043', to: '#bf360c' },  // 橙红
];

const gridContainer = document.getElementById('button-grid');

projects.forEach((proj, i) => {
    const anchor = document.createElement('a');
    anchor.href = proj.url;
    anchor.className = 'btn';
    anchor.textContent = proj.name;

    // 每张卡片分配一个随机主色作为文字色 + 不同延迟/幅度
    const c = PALETTE[i % PALETTE.length];
    anchor.style.setProperty('--c1', c.from);
    anchor.style.animationDelay = `${(i * 0.13).toFixed(2)}s`;
    anchor.style.animationDuration = `${(3 + (i % 4) * 0.4).toFixed(2)}s`;

    // 每次鼠标进入：从一个随机起始色开始流动
    anchor.addEventListener('mouseenter', () => {
        const start = -(Math.random() * 300).toFixed(0);  // -300% ~ 0%，随机偏移
        anchor.style.setProperty('--band-start', `${start}%`);
    });

    if (proj.name !== '本页面') {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    }

    gridContainer.appendChild(anchor);
});