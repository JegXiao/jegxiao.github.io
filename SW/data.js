// ===== 上架/下架模型，只需编辑此文件 =====
// 图片路径相对于本文件所在目录
// 建议 images[0] 用作封面图，其余为详情图

const categories = [
    {
        name: "地区钥匙扣系列",
        models: [
            {
                id: "大雁塔",
                name: "大雁塔",
                brief: "让思绪回到十三朝古都",
                description: "这里是完整的详细描述。你可以在这里写任意长度的介绍，包括设计思路、工艺特点、使用场景等。\n支持换行。",
                cover: "models/钥匙扣/大雁塔/0.png",
                images: [
                    "models/钥匙扣/大雁塔/0.png",
                    "models/钥匙扣/pic1.jpg",
                    "models/钥匙扣/pic2.jpg"
                ]
            },

            {
                id: "demo-002",
                name: "钥匙扣",
                brief: "这是一个示例模型，展示卡片效果",
                description: "这里是完整的详细描述。你可以在这里写任意长度的介绍，包括设计思路、工艺特点、使用场景等。\n支持换行。",
                cover: "models/钥匙扣/cover.jpg",
                images: [
                    "models/钥匙扣/cover.jpg",
                    "models/钥匙扣/pic1.jpg",
                    "models/钥匙扣/pic2.jpg"
                ]
            }
        ]
    },

    {
        name: "示例分类",
        models: [
            {
                id: "demo-001",
                name: "钥匙扣",
                brief: "这是一个示例模型，展示卡片效果",
                description: "这里是完整的详细描述。你可以在这里写任意长度的介绍，包括设计思路、工艺特点、使用场景等。\n支持换行。",
                cover: "models/钥匙扣/cover.jpg",
                images: [
                    "models/钥匙扣/cover.jpg",
                    "models/钥匙扣/pic1.jpg",
                    "models/钥匙扣/pic2.jpg"
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
//             cover: "models/文件夹名/封面图.jpg",
//             images: ["models/文件夹名/图1.jpg", "models/文件夹名/图2.jpg"]
//         }
//     ]
// }
