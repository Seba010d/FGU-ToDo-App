import { saveData } from "./localStorage.js";
import { renderTodos } from "./view.js";

export function initAddTodo(todos) {
  const input = document.querySelector("input");
  const addBtn = document.querySelector(".btn-primary");

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    let nextId = 1;
    if (todos.length > 0) {
      nextId = Math.max(...todos.map((t) => t.id)) + 1;
    }

    todos.push({
      id: nextId,
      text,
      done: false,
    });

    saveData(todos);
    renderTodos(todos);
    input.value = "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBtn.click();
  });
}
