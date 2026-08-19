<div align="center">

# 🚀 JegXiao 的项目主页

**个人项目作品集 · GitHub Pages · Vanilla HTML / CSS / JS**

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?logo=githubpages&logoColor=white&labelColor=4285F4)](https://jegxiao.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![No Build](https://img.shields.io/badge/Build-None-success)](#-技术栈)

**🇨🇳 简体中文** · [🇹🇼 繁體中文](#繁體中文) · [🇺🇸 English](#english)

</div>

---

## 🌟 主推项目 · OpenFlow 开放流动

> 一套关于流体、协作与开放的小型项目集合。

<table>
<tr>
<td width="60%">

✨ **核心特性**

- 🌍 **三语切换**：简体中文 / 繁體中文 / English
- 🎨 **三套主题**：亮色 / 暗色 / 跟随系统
- 📄 **多页面架构**：首页、关于、项目、团队
- ⚡ **纯静态**：无构建工具、无依赖

🔗 **访问地址**：[jegxiao.github.io/openflow](https://jegxiao.github.io/openflow)

</td>
<td width="40%">

```
openflow/
├── index.html              ← 入口（自动跳转）
├── html_and_i18n/          ← 页面 + i18n 数据
│   ├── 0_head-i18n.js      ← 共享顶部栏翻译
│   ├── 1首页.html
│   ├── 2关于.html
│   ├── 3项目.html
│   └── 4团队.html
├── css/                    ← 样式
└── js/                     ← 主题 + i18n 引擎
```

</td>
</tr>
</table>

---

## 📂 项目列表

> 表格按当前主页按钮顺序排列，★ 为主推项目。

| 项目 | 简介 | 链接 |
|------|------|------|
| ★ **OpenFlow 开放流动** | 三语静态站点，带主题切换 | [访问](https://jegxiao.github.io/openflow) |
| 🎹 键盘钢琴 | 用键盘弹奏的网页钢琴 | [访问](https://jegxiao.github.io/main/钢琴/钢琴.html) |
| 🃏 我要验牌 | 《赌神》风格的扑克牌验牌程序 | [访问](https://jegxiao.github.io/main/我要验牌/验牌.html) |
| 🏎️ F1 起跑反应测试 | 测量你的 F1 起跑反应速度 | [访问](https://jegxiao.github.io/main/F1反应测试/f1_reaction_test.html) |
| 🏎️ 赛车摩擦圆模拟 | 可视化赛车轮胎摩擦圆极限 | [访问](https://jegxiao.github.io/main/赛车摩擦圆模拟/摩擦圆.html) |
| 🗼 汉诺塔演示 | 经典递归算法的动画演示 | [访问](https://jegxiao.github.io/main/汉诺塔演示器/汉诺塔演示器.html) |
| ❓ 何意味 | 一个语义探索的小工具 | [访问](https://jegxiao.github.io/main/何意味/何意味.html) |
| ⭐ SolidWorks 建模作品 | 个人 SW 建模作品展示（含下载） | [访问](https://jegxiao.github.io/main/SW/SW首页.html) |
| 🧬 康威生命游戏 | 经典细胞自动机模拟器 | [访问](https://jegxiao.github.io/main/康威生命游戏/康威.html) |
| 🔧 ICO 图标尺寸查看器 | 上传 ICO 文件查看内部尺寸 | [访问](https://jegxiao.github.io/main/开发辅助/ico尺寸查看器/ico尺寸查看器.html) |

---

## 🛠️ 技术栈

- **HTML5** — 语义化标签、`data-i18n` 自定义属性
- **CSS3** — Grid、Flexbox、CSS 变量、`@keyframes`、动画
- **Vanilla JavaScript** — 零依赖、ES6+
- **GitHub Pages** — 静态托管
- **Google Fonts** — Inter / Noto Serif SC / JetBrains Mono

> 💡 全程**不使用构建工具**——直接编辑源文件，刷新即可看到效果。

---

## 📁 仓库结构

```
jegxiao.github.io/
├── index.html                  ← 主页（项目入口）
├── style.css                   ← 主页样式
├── script.js                   ← 主页按钮生成
├── 图标/                       ← 个人 LOGO（16/32/128/256）
├── main/                       ← 历史项目集
│   ├── F1反应测试/
│   ├── SW/                     ← SolidWorks 建模展示
│   ├── 何意味/
│   ├── 开发辅助/ico尺寸查看器/
│   ├── 康威生命游戏/
│   ├── 我要验牌/
│   ├── 汉诺塔演示器/
│   ├── 赛车摩擦圆模拟/
│   └── 钢琴/
├── openflow/                    ← ★ 主推项目
│   ├── index.html              ← 入口（自动跳转）
│   ├── html_and_i18n/
│   ├── css/
│   └── js/
├── .gitignore
└── LICENSE
```

---

## 🏃 本地预览

由于路径含中文，文件系统编码敏感，建议用 HTTP 服务器而非 `file://` 直接打开：

```bash
# Python 3
python -m http.server 8000

# 或 Node.js
npx serve .

# 或在 WebStorm 中直接打开（推荐，内置 HTTP 服务器）
```

然后访问 [http://localhost:8000](http://localhost:8000)。

---

## 🌐 多语言 i18n 设计要点

OpenFlow 项目里用了一套**简洁的翻译方案**：

| 特点 | 说明 |
|------|------|
| 数据文件独立 | 每个页面（`1首页.html` 等）配独立的 `*-i18n.js` |
| 中文键名 | `data-i18n` 的值就是 HTML 原文，简体中文无需重复 |
| 顶部栏共享 | `0_head-i18n.js` 集中导航/主题/语言翻译 |
| 简体中文兜底 | HTML 原文始终作为简中显示，无需额外 zh 数据 |

---

## 📜 License

本项目以 **MIT License** 开源——详情见 [LICENSE](LICENSE) 文件。

---

# 繁體中文

## 🚀 JegXiao 的專案主頁

**個人專案作品集 · GitHub Pages · Vanilla HTML / CSS / JS**

### 🌟 主推專案 · OpenFlow 開放流動

一套關於流體、協作與開放的小型專案集合。

✨ **核心特性**

- 🌍 **三語切換**：簡體中文 / 繁體中文 / English
- 🎨 **三套主題**：亮色 / 暗色 / 跟隨系統
- 📄 **多頁面架構**：首頁、關於、項目、團隊
- ⚡ **純靜態**：無建置工具、無依賴

🔗 **訪問地址**：[jegxiao.github.io/openflow](https://jegxiao.github.io/openflow)

### 📂 專案列表

完整列表見上方「項目列表」表格（簡繁不影響條目名稱）。

### 🛠️ 技術棧

- **HTML5** · **CSS3** · **Vanilla JavaScript** · **GitHub Pages**
- 全程**不使用建置工具**

### 📜 授權

本專案以 **MIT License** 開源。

---

# English

## 🚀 JegXiao's Project Hub

**Personal project portfolio · GitHub Pages · Vanilla HTML / CSS / JS**

### 🌟 Featured · OpenFlow

A small collection of projects around fluid mechanics, collaboration, and openness.

✨ **Key features**

- 🌍 **Three languages**: Simplified / Traditional Chinese, English
- 🎨 **Three themes**: Light / Dark / System
- 📄 **Multi-page**: Home, About, Projects, Team
- ⚡ **Pure static**: no toolchain, no dependencies

🔗 **Live**: [jegxiao.github.io/openflow](https://jegxiao.github.io/openflow)

### 📂 Projects

See the full table in the "项目列表" section above (entries are bilingual-friendly).

### 🛠️ Tech stack

- **HTML5** · **CSS3** · **Vanilla JavaScript** · **GitHub Pages**
- **No build tools** — edit source, refresh browser

### 📜 License

Released under the **MIT License** — see [LICENSE](LICENSE).