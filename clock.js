const clock = document.querySelector(".js-clock");
const title = clock.querySelector(".js-title");

function init() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  title.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  }`;
}

init();

setInterval(init, 1000);
