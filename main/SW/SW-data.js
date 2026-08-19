// ===== 上架/下架模型，只需编辑此文件 =====
// 图片路径相对于本文件所在目录
// 建议 images[0] 用作封面图，其余为详情图
// id 只需在全文件唯一，字符无限制

const categories = [
    {
        name: "地区钥匙扣系列",
        models: [
            {
                id: "大雁塔钥匙扣",
                name: "大雁塔钥匙扣",
                brief: "让思绪回到十三朝古都",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/0.png",
                    "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/1.png",
                    "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/2.png",
                    "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/3.png"

                ],
                downloads: [
                    { name: "大雁塔钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/大雁塔钥匙扣.STEP" },
                    { name: "大雁塔钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/大雁塔钥匙扣/大雁塔钥匙扣SW23.SLDPRT" }
                ]
            },
            {
                id: "山东聊城钥匙扣",
                name: "山东聊城钥匙扣",
                brief: "沿大运河看看这座城市",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/山东聊城钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/山东聊城钥匙扣/0.png"
                ],
                downloads: [
                    { name: "山东聊城钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/山东聊城钥匙扣/山东聊城钥匙扣.STEP" },
                    { name: "山东聊城钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/山东聊城钥匙扣/山东聊城钥匙扣SW23.SLDPRT" }
                ]
            },
            {
                id: "西安钥匙扣",
                name: "西安钥匙扣",
                brief: "让思绪回到十三朝古都",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/西安钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/西安钥匙扣/0.png"
                ],
                downloads: [
                    { name: "西安钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/西安钥匙扣/西安钥匙扣.STEP" },
                    { name: "西安钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/西安钥匙扣/西安钥匙扣SW23.SLDPRT" }
                ]
            },
            {
                id: "吉林四平钥匙扣",
                name: "吉林四平钥匙扣",
                brief: "叶赫那拉氏的发源地，东北革命圣地",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/吉林四平钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/吉林四平钥匙扣/0.png"
                ],
                downloads: [
                    { name: "吉林四平钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/吉林四平钥匙扣/吉林四平钥匙扣.STEP" },
                    { name: "吉林四平钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/吉林四平钥匙扣/吉林四平钥匙扣SW23.SLDPRT" }
                ]
            },
            {
                id: "湖北黄石钥匙扣",
                name: "湖北黄石钥匙扣",
                brief: "在长江畔感受历史与现代的融合",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/湖北黄石钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/湖北黄石钥匙扣/0.png"
                ],
                downloads: [
                    { name: "湖北黄石钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/湖北黄石钥匙扣/湖北黄石钥匙扣.STEP" },
                    { name: "湖北黄石钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/湖北黄石钥匙扣/湖北黄石钥匙扣SW23.SLDPRT" }
                ]
            },
            {
                id: "贵州铜仁钥匙扣",
                name: "贵州铜仁钥匙扣",
                brief: "山、河、桥、民族，共同组成了这里",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/贵州铜仁钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/贵州铜仁钥匙扣/0.png"
                ],
                downloads: [
                    { name: "贵州铜仁钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/贵州铜仁钥匙扣/贵州铜仁钥匙扣.STEP" },
                    { name: "贵州铜仁钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/贵州铜仁钥匙扣/贵州铜仁钥匙扣SW23.SLDPRT" }
                ]
            },
            {
                id: "贵州铜仁沿河白塔钥匙扣",
                name: "贵州铜仁沿河白塔钥匙扣",
                brief: "伫立于乌江畔的建筑",
                description: "",
                cover: "SWmodels/地区钥匙扣系列/贵州铜仁沿河白塔钥匙扣/0.png",
                images: [
                    "SWmodels/地区钥匙扣系列/贵州铜仁沿河白塔钥匙扣/0.png"
                ],
                downloads: [
                    { name: "贵州铜仁沿河白塔钥匙扣.STEP", url: "SWmodels/地区钥匙扣系列/贵州铜仁沿河白塔钥匙扣/贵州铜仁沿河白塔钥匙扣.STEP" },
                    { name: "贵州铜仁沿河白塔钥匙扣SW23.SLDPRT", url: "SWmodels/地区钥匙扣系列/贵州铜仁沿河白塔钥匙扣/贵州铜仁沿河白塔钥匙扣SW23.SLDPRT" }
                ]
            }
        ]
    },

    {
        name: "其他模型",
        models: [
            {
                id: "五月的风",
                name: "五月的风",
                brief: "青岛城市的青春记忆",
                description: "",
                cover: "SWmodels/其他模型/五月的风/0.png",
                images: [
                    "SWmodels/其他模型/五月的风/0.png"
                ],
                downloads: [
                    { name: "五月的风.STEP", url: "SWmodels/其他模型/五月的风/五月的风.STEP" },
                    { name: "五月的风SW23.SLDPRT", url: "SWmodels/其他模型/五月的风/五月的风SW23.SLDPRT" }
                ]
            },
            {
                id: "圣诞树",
                name: "圣诞树",
                brief: "圣诞快乐",
                description: "",
                cover: "SWmodels/其他模型/圣诞树/0.png",
                images: [
                    "SWmodels/其他模型/圣诞树/0.png"
                ],
                downloads: [
                    { name: "圣诞树.STEP", url: "SWmodels/其他模型/圣诞树/圣诞树.STEP" },
                    { name: "圣诞树SW23.SLDPRT", url: "SWmodels/其他模型/圣诞树/圣诞树SW23.SLDPRT" }
                ]
            },
            {
                id: "安卓机器人（三部分）",
                name: "安卓机器人（三部分）",
                brief: "给开发者的礼物",
                description: "",
                cover: "SWmodels/其他模型/安卓机器人/0.png",
                images: [
                    "SWmodels/其他模型/安卓机器人/0.png"
                ],
                downloads: [
                    { name: "安卓机器人.STEP", url: "SWmodels/其他模型/安卓机器人/安卓机器人.STEP" },
                    { name: "安卓机器人SW23.SLDPRT", url: "SWmodels/其他模型/安卓机器人/安卓机器人SW23.SLDPRT" },
                    { name: "安卓头.STEP", url: "SWmodels/其他模型/安卓机器人/安卓头.STEP" },
                    { name: "安卓头SW23.SLDPRT", url: "SWmodels/其他模型/安卓机器人/安卓头SW23.SLDPRT" },
                    { name: "安卓手臂.STEP", url: "SWmodels/其他模型/安卓机器人/安卓手臂.STEP" },
                    { name: "安卓手臂SW23.SLDPRT", url: "SWmodels/其他模型/安卓机器人/安卓手臂SW23.SLDPRT" },
                    { name: "安卓装配SW23.SLDASM", url: "SWmodels/其他模型/安卓机器人/安卓装配SW23.SLDASM" }
                ]
            },
            {
                id: "木哨-工程实践",
                name: "仿制木工哨子",
                brief: "工程实践木工课程作品",
                description: "",
                cover: "SWmodels/其他模型/木哨-工程实践/0.png",
                images: [
                    "SWmodels/其他模型/木哨-工程实践/0.png"
                ],
                downloads: [
                    { name: "木哨-工程实践.STEP", url: "SWmodels/其他模型/木哨-工程实践/木哨-工程实践.STEP" },
                    { name: "木哨-工程实践SW23.SLDPRT", url: "SWmodels/其他模型/木哨-工程实践/木哨-工程实践SW23.SLDPRT" }
                ]
            },
            {
                id: "橄榄球",
                name: "橄榄球（四瓣）",
                brief: "对造型的第一次探索",
                description: "",
                cover: "SWmodels/其他模型/橄榄球/0.png",
                images: [
                    "SWmodels/其他模型/橄榄球/0.png"
                ],
                downloads: [
                    { name: "橄榄球.STEP", url: "SWmodels/其他模型/橄榄球/橄榄球.STEP" },
                    { name: "橄榄球SW23.SLDPRT", url: "SWmodels/其他模型/橄榄球/橄榄球SW23.SLDPRT" }
                ]
            },
            {
                id: "橄榄球-新",
                name: "橄榄球-新版（两瓣）",
                brief: "第一从尝试镂空模型",
                description: "",
                cover: "SWmodels/其他模型/橄榄球-新/0.png",
                images: [
                    "SWmodels/其他模型/橄榄球-新/0.png"
                ],
                downloads: [
                    { name: "橄榄球-新.STEP", url: "SWmodels/其他模型/橄榄球-新/橄榄球-新.STEP" },
                    { name: "橄榄球-新SW23.SLDPRT", url: "SWmodels/其他模型/橄榄球-新/橄榄球-新SW23.SLDPRT" }
                ]
            },
            {
                id: "镊子",
                name: "镊子",
                brief: "用处不大的几个镊子",
                description: "",
                cover: "SWmodels/其他模型/镊子/0.png",
                images: [
                    "SWmodels/其他模型/镊子/0.png"
                ],
                downloads: [
                    { name: "镊子.STEP", url: "SWmodels/其他模型/镊子/镊子.STEP" },
                    { name: "镊子SW23.SLDPRT", url: "SWmodels/其他模型/镊子/镊子SW23.SLDPRT" }
                ]
            },
            {
                id: "鲁班锁",
                name: "鲁班锁",
                brief: "六直鲁班锁",
                description: "",
                cover: "SWmodels/其他模型/鲁班锁/0.png",
                images: [
                    "SWmodels/其他模型/鲁班锁/0.png"
                ],
                downloads: [
                    { name: "鲁班锁.STEP", url: "SWmodels/其他模型/鲁班锁/鲁班锁.STEP" },
                    { name: "鲁班锁SW23.SLDPRT", url: "SWmodels/其他模型/鲁班锁/鲁班锁SW23.SLDPRT" }
                ]
            }
        ]
    }
];

// ===== 如需新增分类，在 categories 数组里追加即可 =====
// 格式：
// {
//     name: "分类名称",
//     models: [
//         {
//             id: "唯一标识",
//             name: "模型名称",
//             brief: "卡片上显示的短简介",
//             description: "点击后的完整详情",
//             cover: "SWmodels/文件夹名/封面图.jpg",
//             images: ["SWmodels/文件夹名/图1.jpg", "SWmodels/文件夹名/图2.jpg"],
//             downloads: [
//                 { name: "文件1.STEP", url: "SWmodels/文件夹名/文件1.STEP" },
//                 { name: "文件2.SLDPRT", url: "SWmodels/文件夹名/文件2.SLDPRT" }
//             ]       // 无可下载文件时可省略此字段
//         }
//     ]
// }
