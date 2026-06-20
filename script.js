// 在这里填写你的项目名称和对应的 URL
const projects = [
    { name: "本页面", url: "index.html" },
    { name: "何意味", url: "何意味/何意味.html" },
    { name: "我要验牌", url: "我要验牌/index.html" },
    { name: "F1起跑反应测试🏎️", url: "F1反应测试/f1_reaction_test.html" },
    { name: "键盘钢琴", url: "钢琴/钢琴.html" },
    { name: "赛车摩擦圆模拟🏎️", url: "赛车摩擦圆模拟/index.html" },
    { name: "汉诺塔演示", url: "汉诺塔演示器/汉诺塔演示器.html" },
    { name: "⭐我的SolidWorks建模作品⭐", url: "SW/首页.html" },
    { name: "ICO图标尺寸查看器", url: "开发辅助/ico查看器.html" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
    // { name: "……建设中", url: "#" },
];

const gridContainer = document.getElementById('button-grid');

// 遍历数组并创建按钮
projects.forEach(proj => {
    const anchor = document.createElement('a');
    anchor.href = proj.url;
    anchor.className = 'btn';
    anchor.textContent = proj.name;

    if (proj.name !== '本页面') {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    }

    gridContainer.appendChild(anchor);
});