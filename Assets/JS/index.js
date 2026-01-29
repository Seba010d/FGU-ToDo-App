import { initAddTodo } from "./modules/addTodos.js";
import { initDeleteTodos } from "./modules/deleteTodos.js";
import { saveData, loadData } from "./modules/localStorage.js";
import { initToggleTodos } from "./modules/toggleTodos.js";
import { renderApp, renderTodos } from "./modules/view.js";

renderApp();

let todos = loadData() || [];
renderTodos(todos);
initAddTodo(todos);
initDeleteTodos(todos);
initToggleTodos(todos);
