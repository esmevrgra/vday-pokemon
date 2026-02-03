const screens = {
  ask: document.getElementById("screen-ask"),
  no: document.getElementById("screen-no"),
  gift: document.getElementById("screen-gift"),
  pokeball: document.getElementById("screen-pokeball"),
  reveal: document.getElementById("screen-reveal"),
  letter: document.getElementById("screen-letter"),
};

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const tryAgain = document.getElementById("tryAgain");

const tryAgainBtn = document.getElementById("tryAgainBtn");
const openGiftBtn = document.getElementById("openGiftBtn");
const openBallBtn = document.getElementById("openBallBtn");
const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");

let yesScale = 1;
let noScale = 1;
let noClicks = 0;

function show(name){
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function updateScales(){
  document.documentElement.style.setProperty("--yesScale", String(yesScale));
  document.documentElement.style.setProperty("--noScale", String(noScale));
}

function resetAskState(){
  yesScale = 1;
  noScale = 1;
  noClicks = 0;
  updateScales();
  tryAgain.classList.remove("show");
}

yesBtn.addEventListener("click", () => {
  show("gift");
});

noBtn.addEventListener("click", () => {
  noClicks += 1;
  tryAgain.classList.add("show");

  noScale = clamp(noScale - 0.12, 0.25, 1);
  yesScale = clamp(yesScale + 0.16, 1, 2.4);
  updateScales();

  if (noClicks >= 3) {
    show("no");
  }
});

tryAgainBtn.addEventListener("click", () => {
  resetAskState();
  show("ask");
});

openGiftBtn.addEventListener("click", () => {
  show("pokeball");
});

openBallBtn.addEventListener("click", () => {
  show("reveal");
});

nextBtn.addEventListener("click", () => {
  show("letter");
});

homeBtn.addEventListener("click", () => {
  resetAskState();
  show("ask");
});
