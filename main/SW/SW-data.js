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
                cover: "SWmodels/钥匙扣/大雁塔/1.png",
                images: [
                    "SWmodels/钥匙扣/大雁塔/1.png",
                    "SWmodels/钥匙扣/pic1.jpg",
                    "SWmodels/钥匙扣/pic2.jpg"
                ],
                downloads: [
                    { name: "大雁塔.STEP", url: "models/钥匙扣/大雁塔/大雁塔.STEP" },
                    { name: "大雁塔.STL", url: "models/钥匙扣/大雁塔/大雁塔.STL" }
                ]
            },

            {
                id: "demo-002",
                name: "钥匙扣",
                brief: "这是一个示例模型，展示卡片效果",
                description: "这里是完整的详细描述。你可以在这里写任意长度的介绍，包括设计思路、工艺特点、使用场景等。\n支持换行。",
                cover: "SWmodels/钥匙扣/cover.jpg",
                images: [
                    "SWmodels/钥匙扣/cover.jpg",
                    "SWmodels/钥匙扣/pic1.jpg",
                    "SWmodels/钥匙扣/pic2.jpg"
                ]
            }
        ]
    },

    {
        name: "分类二",
        models: [
            {
                id: "demo-001",
                name: "钥匙扣",
                brief: "这是一个示例模型，展示卡片效果",
                description: "这里是完整的详细描述。你可以在这里写任意长度的介绍，包括设计思路、工艺特点、使用场景等。\n支持换行。",
                cover: "SWmodels/钥匙扣/cover.jpg",
                images: [
                    "SWmodels/钥匙扣/cover.jpg",
                    "SWmodels/钥匙扣/pic1.jpg",
                    "SWmodels/钥匙扣/pic2.jpg"
                ]
            }
        ]
    }
];

// ===== 如需新增分类，在 categories 数组里追加即可 =====
// 格式：
// {
//     name: "分类名称",
//     SWmodels: [
//         {
//             id: "唯一标识",
//             name: "模型名称",
//             brief: "卡片上显示的短简介",
//             description: "点击后的完整详情",
//             cover: "SWmodels/文件夹名/封面图.jpg",
//             images: ["SWmodels/文件夹名/图1.jpg", "SWmodels/文件夹名/图2.jpg"],
//             downloads: [
//                 { name: "文件1.STEP", url: "SWmodels/文件夹名/文件1.STEP" },
//                 { name: "文件2.STL", url: "SWmodels/文件夹名/文件2.STL" }
//             ]       // 无可下载文件时可省略此字段
//         }
//     ]
// }
