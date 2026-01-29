import { saveData } from "./localStorage.js";
import { openConfirmBox, renderTodos } from "./view.js";

export function initDeleteTodos(todos) {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
      const todoItem = e.target.closest(".todo-item");
      const todoText = todoItem.querySelector("span").textContent;

      openConfirmBox(`Er du sikker på, at du vil slette "${todoText}"?`, () => {
        const index = todos.findIndex((t) => t.text === todoText);
        if (index !== -1) {
          todos.splice(index, 1);
          saveData(todos);
          renderTodos(todos);
        }
      });
    }
  });
}
