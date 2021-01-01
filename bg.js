const wrap = document.querySelector(".wrap");
const IMAGE_NUM = 5;
const SET_BG = "setbg";
function getRandomNum() {
  const randN = Math.random() * IMAGE_NUM;
  const floorRandN = Math.floor(randN);
  return floorRandN;
}

function paintImage(imageNum) {
  const img = new Image();
  img.src = `./images/${imageNum}.jpg`;
  img.classList.add(SET_BG);
  wrap.appendChild(img);
}

function init() {
  const randomImageNum = getRandomNum() + 1;
  paintImage(randomImageNum);
}

init();
