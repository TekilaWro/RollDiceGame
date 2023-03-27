"use script";

let scoreLeft = 0;
let scoreRight = 0;
let totalScoreLeft = 0;
let totalScoreRight = 0;
const playerLeft = document.querySelector(".player-left");
const playerRight = document.querySelector(".player-right");
const currentScoreLeft = document.querySelector(".current-score-left");
const currentScoreRight = document.querySelector(".current-score-right");
let playerNameLeft = document.querySelector(".player-name-left");
let playerNameRight = document.querySelector(".player-name-right");

const changeActivePlayer = function () {
  playerLeft.classList.toggle("active");
  playerRight.classList.toggle("active");
};

document.querySelector(".roll-dice").addEventListener("click", function () {
  // rolling dice
  let dice = Math.trunc(Math.random() * 6) + 1;
  //showing dice number
  document.querySelector(".dice-number").classList.remove("hidden");
  console.log(dice);
  document.querySelector(".dice-number").textContent = dice;

  if (dice === 1 && playerLeft.classList.contains("active")) {
    changeActivePlayer();
    scoreLeft = 0;
  } else if (dice === 1 && playerRight.classList.contains("active")) {
    changeActivePlayer();
    scoreRight = 0;
  } else if (dice !== 1 && playerLeft.classList.contains("active")) {
    scoreLeft = dice + scoreLeft;
    console.log(scoreLeft);
  } else if (dice !== 1 && playerRight.classList.contains("active")) {
    scoreRight = dice + scoreRight;
    console.log(scoreRight);
  }
  currentScoreLeft.textContent = scoreLeft;
  currentScoreRight.textContent = scoreRight;
});

// hold
document.querySelector(".hold").addEventListener("click", function () {
  if (playerRight.classList.contains("active")) {
    totalScoreRight = totalScoreRight + scoreRight;
    document.querySelector(".score-right").textContent = totalScoreRight;
    scoreRight = 0;
    currentScoreRight.textContent = scoreRight; //

    if (totalScoreRight < 20) {
      changeActivePlayer();
    } else {
      playerNameRight.textContent = "WINNER";
      document.querySelector(".roll-dice").classList.add("hidden");
    }
  } else if (playerLeft.classList.contains("active")) {
    totalScoreLeft = totalScoreLeft + scoreLeft;
    document.querySelector(".score-left").textContent = totalScoreLeft;
    scoreLeft = 0;
    currentScoreLeft.textContent = scoreLeft;

    if (totalScoreLeft < 20) {
      changeActivePlayer();
    } else {
      playerNameLeft.textContent = "WINNER";
      document.querySelector(".roll-dice").classList.add("hidden");
    }
  }
});

//new  game button
document.querySelector(".new-game").addEventListener("click", function () {
  playerLeft.classList.add("active");
  playerRight.classList.remove("active");
  scoreLeft = 0;
  scoreRight = 0;
  totalScoreLeft = 0;
  totalScoreRight = 0;
  currentScoreLeft.textContent = scoreLeft;
  document.querySelector(".score-left").textContent = totalScoreLeft;
  document.querySelector(".score-right").textContent = totalScoreRight;
  currentScoreRight.textContent = scoreRight;
  document.querySelector(".dice-number").classList.add("hidden");
  playerNameLeft.textContent = "Player left";
  playerNameRight.textContent = "Player right";
  document.querySelector(".roll-dice").classList.remove("hidden");
});
