// app.js – 主入口，负责路由、渲染笔记列表和编辑器
import { loadNotes, saveNote, deleteNote } from './storage.js';
import { initEditor, getEditorContent, setEditorContent } from './editor.js';

const appRoot = document.getElementById('appRoot');

let notes = [];
let currentId = null; // 正在编辑的笔记 id

function renderList() {
  appRoot.innerHTML = `
    <div class="toolbar">
      <button id="newNoteBtn">新建笔记</button>
    </div>
    <ul id="noteList">
      ${notes.map(n => `<li data-id="${n.id}" class="note-item">${n.title || '未命名'} <button class="delBtn">🗑️</button></li>`).join('')}
    </ul>
  `;
  document.getElementById('newNoteBtn').onclick = () => openEditor();
  document.querySelectorAll('.note-item').forEach(item => {
    item.onclick = (e) => {
      if (e.target.classList.contains('delBtn')) return; // 阻止删除时进入编辑
      const id = item.dataset.id;
      const note = notes.find(n => n.id === id);
      openEditor(note);
    };
  });
  document.querySelectorAll('.delBtn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const li = btn.closest('li');
      const id = li.dataset.id;
      deleteNote(id);
      notes = notes.filter(n => n.id !== id);
      renderList();
    };
  });
}

function openEditor(note = null) {
  currentId = note ? note.id : null;
  const title = note ? note.title : '';
  const content = note ? note.content : '';
  appRoot.innerHTML = `
    <div class="toolbar">
      <button id="backBtn">← 返回</button>
      <button id="saveBtn">保存</button>
    </div>
    <input type="text" id="noteTitle" placeholder="标题" value="${title}" style="width:100%;margin-bottom:0.5rem;"/>
    <div id="editor" class="editor" contenteditable="true"></div>
  `;
  document.getElementById('backBtn').onclick = renderList;
  document.getElementById('saveBtn').onclick = () => {
    const newNote = {
      id: currentId || crypto.randomUUID(),
      title: document.getElementById('noteTitle').value.trim(),
      content: getEditorContent()
    };
    saveNote(newNote);
    notes = loadNotes();
    renderList();
  };
  initEditor();
  setEditorContent(content);
}

function init() {
  notes = loadNotes();
  renderList();
}

init();
