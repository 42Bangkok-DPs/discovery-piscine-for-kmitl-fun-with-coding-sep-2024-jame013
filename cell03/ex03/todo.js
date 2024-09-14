let list = [];
let toDoEl = document.getElementById("list_contain")
let addBtn = document.getElementById("addbtn")

function createTodoEl(value) {
  let button = document.createElement("button");
  button.classList.add("text");
  button.textContent = value;
  return button;
};

function addTodo(value) {
  list.push(value);
  updateCookie(JSON.stringify(list));
  render();
};



function removeTodo(index) {
  list.splice(index, 1);
  updateCookie(JSON.stringify(list));
  render();
}

function updateCookie(value) {
  setCookie("toDo", value);
};

function setCookie(key, value) {
  document.cookie = `${key} = ${value};`;
};

function getCookie(key) {
  let cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    
    if(cookie.startsWith(key + "="))
      return cookie.substring(key.length + 1);
    return null;
  }
};

addBtn.addEventListener("click", () => {
  let newTodo = prompt("New ToDo");
  if (newTodo.length <= 0) return;
  addTodo(newTodo);
});

function render() {
  toDoEl.innerHTML = "";
  list.forEach((value, index) => {
    let todoItem = createTodoEl(value);
    todoItem.addEventListener("click", () => {
      removeTodo(index);
    });
    toDoEl.appendChild(todoItem);
  });
};

let oldToDo = getCookie("toDo");
if (oldToDo) {
  list = JSON.parse(oldToDo);
}

render();
