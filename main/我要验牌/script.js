// 1. 定义音频对应的显示名称（你可以随意修改这里的文字）
const buttonNames = [
    "给我擦皮鞋",       // 对应 1.mp3
    "我要验牌",         // 对应 2.mp3
    "牌没有问题",       // 对应 3.mp3
    "小儿科",       // ...
    "梭哈",
    "跟你梭哈",
    "来开牌开牌啊",
    "你先啊",
    "你开先(法语)",
    "你开先(中文)",
    "你是不想开先是吗",
    "没错我说什么也不开先你先开",
    "那我也不想先开",
    "那我们就不要赌了把钱分掉算了嘛",
    "赞同",
    "小瘪三"        // 对应 16.mp3
];

const audioFiles = [
    "给我擦皮鞋.mp3", "我要验牌.mp3", "牌没有问题.mp3", "小儿科.mp3",
    "梭哈.mp3", "跟你梭哈.mp3", "来开牌开牌啊.mp3", "你先啊.mp3",
    "你开先.mp3", "你开先z.mp3", "你是不想开先是吗.mp3", 
    "没错我说什么也不开先你先开.mp3", "那我也不想先开.mp3", 
    "那我们就不要赌了把钱分掉算了嘛.mp3", "赞同.mp3", "小瘪三.mp3"
];

const grid = document.getElementById('buttonGrid');
const audioObjects = {};

audioFiles.forEach((fileName, index) => {
    const btnId = index + 1;
    const btn = document.createElement('button');
    btn.className = 'sound-btn';
    
    // 【关键修改点】：这里由原来的 btnId 改为从 buttonNames 数组里取名
    btn.innerText = buttonNames[index]; 
    
    btn.id = `btn-${btnId}`;
    grid.appendChild(btn);

    const audio = new Audio(`audio/${fileName}`);
    audio.preload = "auto";
    audioObjects[btnId] = audio;

    btn.onclick = () => {
        audioObjects[btnId].currentTime = 0;
        audioObjects[btnId].play();
    };
});