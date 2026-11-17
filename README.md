# Computer Fundamentals Notes

This repository contains a simple **HTML note‑taking application** that runs entirely in the browser. It allows you to create, edit, delete, and organize notes locally without any backend service.

## Features
- Single‑page UI built with plain HTML, CSS, and JavaScript.
- Dark/Light theme toggle.
- Local persistence using `localStorage` (or IndexedDB in future extensions).
- Basic rich‑text editing (bold, italic, lists, headings) via a `contenteditable` area.
- Optional tagging support for grouping notes (can be enabled later).

## Project Structure
```
html-note/
│
├─ index.html            # Entry point
├─ assets/
│   ├─ css/
│   │   └─ style.css    # Global styles and theme handling
│   └─ js/
│       ├─ app.js       # Routing, note list, and editor integration
│       ├─ editor.js    # Placeholder for rich‑text editor implementation
│       └─ storage.js   # Placeholder for local persistence logic
└─ README.md            # This file
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone git@github.com:ry7oll/Computer-Fundamentals-Notes.git
   cd Computer-Fundamentals-Notes/html-note
   ```
2. Open `index.html` in a browser to see the app.
3. To contribute, modify the source files and push your changes:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```

## Future Enhancements (optional)
- Full **tagging** UI for grouping notes.
- Sync via GitHub/GitLab or cloud storage.
- Export/Import notes as JSON.
- Search functionality with `lunr.js`.

---

*This README was generated automatically for the **Computer Fundamentals Notes** project.*
