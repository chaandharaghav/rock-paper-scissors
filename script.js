let player = {
  score: 0,
};

let computer = {
  score: 0,
};

const players = [player, computer];

function capitalize(word) {
  word = word.toLowerCase();
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  return rps[Math.round(Math.random() * 2)];
}

function findOutcome(playerSelection, computerSelection) {
  const outcomes = {
    rock: {
      rock: "tie",
      paper: "lost",
      scissors: "won",
    },
    paper: {
      rock: "won",
      paper: "tie",
      scissors: "lost",
    },
    scissors: {
      rock: "lost",
      paper: "won",
      scissors: "tie",
    },
  };
  return outcomes[playerSelection][computerSelection];
}

function playRound(playerSelection, computerSelection) {
  const outcome = findOutcome(playerSelection, computerSelection);

  if (outcome === "lost") {
    computer.score += 2;

    return `You lost! ${capitalize(computerSelection)} beats 
    ${capitalize(playerSelection)}`;
  } else if (outcome === "won") {
    player.score += 2;

    return `You won! ${capitalize(playerSelection)} beats 
    ${capitalize(computerSelection)}`;
  } else {
    player.score++;
    computer.score++;
    return `You tie! ${capitalize(computerSelection)} ties with 
    ${capitalize(playerSelection)}`;
  }
}

function resetScores() {
  players.forEach((player) => (player.score = 0));
}

function game(playerSelection) {
  const currentGameResult = playRound(playerSelection, computerPlay());

  const currentStatus = document.querySelector(".current-status");
  currentStatus.innerText = currentGameResult;

  const playerScore = document.querySelector(".player-score span");
  const computerScore = document.querySelector(".computer-score span");

  playerScore.innerText = player.score;
  computerScore.innerText = computer.score;

  if (player.score + computer.score > 0) {
    const currentScores = document.querySelector(".current-scores");
    currentScores.hidden = false;
  }
  if (player.score + computer.score >= 10) {
    const result = document.querySelector(".result");
    if (player.score > computer.score) {
      result.innerText = "The winner is you!";
    } else if (player.score < computer.score) {
      result.innerText = "The winner is the computer!";
    } else {
      result.innerText = "It is a tie!";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons-section button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      game(this.dataset.choice);
    });
  }
});
