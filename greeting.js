const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetingWrap = document.querySelector(".greeting-wrap");
const greeting = greetingWrap.querySelector(".js-greeting");
const tiemGreeting = greetingWrap.querySelector(".time-greeting");
const logoutBtn = document.querySelector(".logout-btn");
const USER_LS = "currentUser";
const SHOW_ON = "showing";

function askForUser() {
  form.classList.add(SHOW_ON);
  greetingWrap.classList.remove(SHOW_ON);
  form.addEventListener("submit", submitHandler);
}

function saveLoad(currentValue) {
  localStorage.setItem(USER_LS, currentValue);
}
function clickHandler() {
  localStorage.removeItem(USER_LS);
  window.location.reload();
}

logoutBtn.addEventListener("click", clickHandler);

function submitHandler(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveLoad(currentValue);
}

function getHour() {
  const date = new Date();
  const hour = date.getHours();
  return hour;
}

function paintGreeting(currentUser) {
  const currentHour = getHour();
  greetingWrap.classList.add(SHOW_ON);
  form.classList.remove(SHOW_ON);
  greeting.innerText = `WelCome ${currentUser}`;

  tiemGreeting.innerText = `${
    currentHour <= 7 || currentHour >= 18
      ? `Good Night`
      : currentHour <= 12
      ? `Good Morning`
      : `Good Afternoon`
  }`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForUser();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
