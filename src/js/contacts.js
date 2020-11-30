// import "../css/contacts.css";
import a from "./refs.js";

const { contacts } = a;

const game = ["stone", "scissors", "paper"];

function createBtns(array) {
  return array.map((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    btn.dataset.value = el;
    return btn;
  });
}

const buttons = createBtns(game);
contacts.append(...buttons);
function randomIdx(array) {
  let idx = Math.round(Math.random() * (array.length - 1));
  return idx;
}
randomIdx(game);
contacts.addEventListener("click", myGame);

function myGame(e) {
  let user = e.target.dataset.value;
  console.log(user);
  let comp = game[randomIdx(game)];
  console.log(comp);

  if (user === comp) {
    console.log("draw");
  } else if (
    (user === "stone" && comp === "scissors") ||
    (user === "scissors" && comp === "paper") ||
    (user === "paper" && comp === "stone")
  ) {
    console.log("user wins");
  } else {
    console.log("comp wins");
  }
}
