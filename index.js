"use strict";
const rockBtn = document.querySelector("[data-rock-btn]");
const paperBtn = document.querySelector("[data-paper-btn]");
const scissorsBtn = document.querySelector("[data-scissors-btn]");

const scoreBoard = document.querySelector("[data-score-board]");
const userScoreEl = document.querySelector("[data-user-score]");
const computerScoreEl = document.querySelector("[data-computer-score]");
const resultTitle = document.querySelector("[data-resut-title]");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getCapitalFistLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function win(user, computer) {
  userScore++;
  userScoreEl.innerHTML = userScore;
  computerScoreEl.innerHTML = computerScore;

  const smallerUserWord = "(User)".fontsize(3).sub();
  const smallerComputerWord = "(Computer)".fontsize(3).sub();

  resultTitle.innerHTML = `${getCapitalFistLetter(user)}${smallerUserWord} beats
         ${getCapitalFistLetter(computer)}${smallerComputerWord}.You win! 😀`;
}

function lose(user, computer) {
  computerScore++;
  userScoreEl.innerHTML = userScore;
  computerScoreEl.innerHTML = computerScore;

  const smallerUserWord = "(User)".fontsize(3).sub();
  const smallerComputerWord = "(Computer)".fontsize(3).sub();

  resultTitle.innerHTML = `${getCapitalFistLetter(
    user
  )} ${smallerUserWord} loses to
         ${getCapitalFistLetter(computer)}${smallerComputerWord}.You lost. 😭`;
}

function draw(user, computer) {
  const smallerUserWord = "(User)".fontsize(3).sub();
  const smallerComputerWord = "(Computer)".fontsize(3).sub();

  resultTitle.innerHTML = `${getCapitalFistLetter(
    user
  )}  ${smallerUserWord} equals
         ${getCapitalFistLetter(
           computer
         )}${smallerComputerWord}.It's a draw. 🙏`;
}

function play(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockBtn.addEventListener("click", function () {
    play("rock");
  });

  paperBtn.addEventListener("click", function () {
    play("paper");
  });

  scissorsBtn.addEventListener("click", function () {
    play("scissors");
  });
}

main();
