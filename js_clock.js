const clockContatiner = document.querySelector(".js-clock");
const clockTitle = clockContatiner.querySelector("h1");

function getTIme() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTIme();
}

init();
