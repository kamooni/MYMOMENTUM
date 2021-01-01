const todoBtn = document.querySelector(".todo-btn");
const todoWrap = document.querySelector(".todo-wrap");
const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const TODOS_LS = "todos";
const SHOWTHAT = "showthat";
let toDos = [];
function showToDoList() {
  todoWrap.classList.toggle(SHOWTHAT);
  todoBtn.classList.toggle("clicked-btn");
}

todoBtn.addEventListener("click", showToDoList);

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (todo) {
      paintToDos(todo.text);
    });
  }
}

function delBtnHandler(evnet) {
  const target = event.target.parentNode.parentNode;
  const targetId = parseInt(target.id);
  todoList.removeChild(target);
  const newToDos = toDos.filter(function (todo) {
    return todo.id !== targetId;
  });
  toDos = newToDos;
  saveToDos();
}
function paintToDos(text) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", delBtnHandler);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = `${text}`;
  delBtn.innerText = "❌";
  div.appendChild(delBtn);
  div.appendChild(span);
  li.appendChild(div);
  li.id = newId;
  todoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function submitHandler(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDos(currentValue);
  saveToDos(currentValue);
  todoInput.value = "";
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", submitHandler);
}

init();
