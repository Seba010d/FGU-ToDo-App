import { initAddTodo } from "./modules/addTodos.js";
import { saveData, loadData } from "./modules/localStorage.js";
import { renderApp, renderTodos } from "./modules/view.js";

renderApp();

let todos = loadData() || [];
renderTodos(todos);
initAddTodo(todos);
