import { saveData } from "./localStorage.js";
import { renderTodos } from "./view.js";

export function initToggleTodos(todos) {
  document.addEventListener("change", (e) => {
    if (e.target.type === "checkbox" && e.target.closest(".todo-item")) {
      const todoItem = e.target.closest(".todo-item");
      const todoText = todoItem.querySelector("span").textContent;

      const todo = todos.find((t) => t.text === todoText);
      if (todo) {
        todo.done = e.target.checked;
        saveData(todos);
        renderTodos(todos);
      }
    }
  });
}
