export function renderTodos(todos) {
  const list = document.querySelector(".todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = `
        <label>
        <input type="checkbox" ${todo.done ? "checked" : ""} />
        <span>${todo.text}</span>
        </label>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;

    list.appendChild(li);
  });
}

export function renderApp() {
  const app = document.getElementById("App");

  app.innerHTML = `
    <div class="add-todo">
      <input type="text" placeholder="Skriv en opgave..." />
      <button class="btn-primary">Add</button>
    </div>
    <ul class="todo-list"></ul>
  `;
}

export function openConfirmBox(message, callback) {
  const box = document.createElement("div");
  box.className = "modalBox";

  const msg = document.createElement("p");
  msg.textContent = message;

  const yesBtn = Document.createElement("button");
  yesBtn.textContent = "Yes";
  yesBtn.addEventListener("click", () => {
    callback();
    box.remove();
  });

  const npBtn = Document.createElement("button");
  npBtn.textContent = "No";
  npBtn.addEventListener("click", () => {
    box.remove();
  });

  box.appendChild(msg);
  box.appendChild(yesBtn);
  box.appendChild(npBtn);
  document.body.appendChild(box);
}
