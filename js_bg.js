const body = document.querySelector("body");

const IMAGE_NUMBER = 5;

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `./images/${imgNumber + 1}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
