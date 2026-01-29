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
  // Create backdrop
  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  const box = document.createElement("div");
  box.className = "confirm-box";

  const msg = document.createElement("p");
  msg.textContent = message;

  const yesBtn = document.createElement("button");
  yesBtn.textContent = "Yes";
  yesBtn.className = "yes-btn";
  yesBtn.addEventListener("click", () => {
    callback();
    backdrop.remove();
    box.remove();
  });

  const npBtn = document.createElement("button");
  npBtn.textContent = "No";
  npBtn.className = "no-btn";
  npBtn.addEventListener("click", () => {
    backdrop.remove();
    box.remove();
  });

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "button-group";
  buttonGroup.appendChild(yesBtn);
  buttonGroup.appendChild(npBtn);

  box.appendChild(msg);
  box.appendChild(buttonGroup);
  document.body.appendChild(backdrop);
  document.body.appendChild(box);
}
