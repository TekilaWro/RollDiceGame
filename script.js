"use script";

let scoreLeft = 0;
let scoreRight = 0;
let totalScoreLeft = 0;
let totalScoreRight = 0;

document.querySelector(".roll-dice").addEventListener("click", function () {
  // rolling dice
  let dice = Math.trunc(Math.random() * 6) + 1;
  //showing dice number
  document.querySelector(".dice-number").classList.remove("hidden");

  console.log(dice);
  document.querySelector(".dice-number").textContent = dice;

  if (
    dice === 1 &&
    document.querySelector(".player-left").classList.contains("active")
  ) {
    document.querySelector(".player-left").classList.toggle("active");
    document.querySelector(".player-right").classList.toggle("active");
    scoreLeft = 0;
  } else if (
    dice === 1 &&
    document.querySelector(".player-right").classList.contains("active")
  ) {
    document.querySelector(".player-left").classList.toggle("active");
    document.querySelector(".player-right").classList.toggle("active");
    scoreRight = 0;
  } else if (
    dice !== 1 &&
    document.querySelector(".player-left").classList.contains("active")
  ) {
    scoreLeft = dice + scoreLeft;
    console.log(scoreLeft);
  } else if (
    dice !== 1 &&
    document.querySelector(".player-right").classList.contains("active")
  ) {
    scoreRight = dice + scoreRight;
    console.log(scoreRight);
  }
  document.querySelector(".current-score-left").textContent = scoreLeft;
  document.querySelector(".current-score-right").textContent = scoreRight;
});

// hold
document.querySelector(".hold").addEventListener("click", function () {
  if (document.querySelector(".player-right").classList.contains("active")) {
    totalScoreRight = totalScoreRight + scoreRight;
    document.querySelector(".score-right").textContent = totalScoreRight;
    scoreRight = 0;
    document.querySelector(".current-score-right").textContent = scoreRight;

    if (totalScoreRight < 10) {
      document.querySelector(".player-left").classList.toggle("active");
      document.querySelector(".player-right").classList.toggle("active");
    } else {
      document.querySelector(".player-name-right").textContent = "WINNER";
      document.querySelector(".roll-dice").classList.add("hidden");
    }
  } else if (
    document.querySelector(".player-left").classList.contains("active")
  ) {
    totalScoreLeft = totalScoreLeft + scoreLeft;
    document.querySelector(".score-left").textContent = totalScoreLeft;
    scoreLeft = 0;
    document.querySelector(".current-score-left").textContent = scoreLeft;

    if (totalScoreLeft < 10) {
      document.querySelector(".player-left").classList.toggle("active");
      document.querySelector(".player-right").classList.toggle("active");
    } else {
      document.querySelector(".player-name-left").textContent = "WINNER";
      document.querySelector(".roll-dice").classList.add("hidden");
    }
  }
});

//new  game button
document.querySelector(".new-game").addEventListener("click", function () {
  document.querySelector(".player-left").classList.add("active");
  document.querySelector(".player-right").classList.remove("active");
  scoreLeft = 0;
  scoreRight = 0;
  totalScoreLeft = 0;
  totalScoreRight = 0;
  document.querySelector(".current-score-left").textContent = scoreLeft;
  document.querySelector(".score-left").textContent = totalScoreLeft;
  document.querySelector(".score-right").textContent = totalScoreRight;
  document.querySelector(".current-score-right").textContent = scoreRight;
  document.querySelector(".dice-number").classList.add("hidden");
  document.querySelector(".player-name-left").textContent = "Player left";
  document.querySelector(".player-name-right").textContent = "Player right";
  document.querySelector(".roll-dice").classList.remove("hidden");
});

// zamknij swithch player w funckji

//reset w funkcji
