# 计算机基础笔记

本仓库包含一个简单的 **HTML 笔记记录应用**，完全在浏览器中运行。它允许你在没有任何后端服务的情况下，在本地创建、编辑、删除和整理笔记。

## 功能
- 使用纯 HTML、CSS 和 JavaScript 构建的单页 UI。
- 深色/浅色主题切换。
- 使用 `localStorage` 进行本地持久化（未来扩展中可使用 IndexedDB）。
- 通过 `contenteditable` 区域提供基础富文本编辑（粗体、斜体、列表、标题）。
- 可选的标签支持，用于对笔记进行分组（可在后续启用）。

## 项目结构
```
html-note/
│
├─ index.html            # 入口点
├─ assets/
│   ├─ css/
│   │   └─ style.css    # 全局样式和主题处理
│   └─ js/
│       ├─ app.js       # 路由、笔记列表和编辑器集成
│       ├─ editor.js    # 富文本编辑器实现的占位文件
│       └─ storage.js   # 本地持久化逻辑的占位文件
└─ README.md            # 本文件
```

## 快速开始
1. 克隆仓库：
   ```bash
   git clone git@github.com:ry7oll/Computer-Fundamentals-Notes.git
   cd Computer-Fundamentals-Notes/html-note
   ```
2. 在浏览器中打开 `index.html` 查看应用。
3. 如需贡献，请修改源文件并推送更改：
   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```

## 未来增强（可选）
- 完整的 **标签** UI，用于对笔记进行分组。
- 通过 GitHub/GitLab 或云存储进行同步。
- 将笔记导出/导入为 JSON。
- 使用 `lunr.js` 实现搜索功能。

---

*本 README 是为 **Computer Fundamentals Notes** 项目自动生成的。*
