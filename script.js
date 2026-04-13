// 在这里填写你的项目名称和对应的 URL
const projects = [
    { name: "本页面", url: "https://jegxiao.github.io/index.html" },
    { name: "何意味", url: "https://jegxiao.github.io/何意味/何意味.html" },
    { name: "我要验牌", url: "https://jegxiao.github.io/我要验牌/index.html" },
    { name: "……建设中", url: "我要验牌/index.html" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
    { name: "……建设中", url: "#" },
];

const gridContainer = document.getElementById('button-grid');

// 遍历数组并创建按钮
projects.forEach(proj => {
    const anchor = document.createElement('a');
    anchor.href = proj.url;
    anchor.className = 'btn';
    anchor.textContent = proj.name;

    // 如果是外部链接，可以取消下面这一行的注释，使其在新窗口打开
    // anchor.target = "_blank";

    gridContainer.appendChild(anchor);
});