let list = [];
let toDoEl = $("#list_contain")
let addBtn = $("#addbtn")

function render() {
  toDoEl.empty();
  list.forEach((value, index) => {
    let todoItem = createTodoEl(value);
    todoItem.on("click", () => {
      removeTodo(index);
    });
    toDoEl.append(todoItem);
  });
};

addBtn.on("click", () => {
  let newTodo = prompt("New ToDo");
  if (newTodo.length > 0) {
    addTodo(newTodo);
  }
});

function createTodoEl(value) {
  return $(`<button class="text">${value}</button>`)
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
  document.cookie = `toDo=${value}`
};

function getCookie(key) {
  let cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    
    if(cookie.startsWith(key + "=")) {
      return cookie.substring(key.length + 1);
    }
    return null;
  }
};

let oldToDo = getCookie("toDo");
if (oldToDo) {
  list = JSON.parse(oldToDo);
}

render();