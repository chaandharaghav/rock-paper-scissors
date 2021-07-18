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
    computer.score++;

    return `You lost! ${capitalize(computerSelection)} beats 
    ${capitalize(playerSelection)}`;
  } else if (outcome === "won") {
    player.score++;

    return `You won! ${capitalize(playerSelection)} beats 
    ${capitalize(computerSelection)}`;
  } else {
    return `You tie! ${capitalize(computerSelection)} ties with 
    ${capitalize(playerSelection)}`;
  }
}

function resetScores() {
  players.forEach((player) => (player.score = 0));
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Choose between \n1. Rock \n2.Paper \n3. Scissors"
    );
    playerSelection = playerSelection.trim().toLowerCase();

    let roundOutcome = playRound(playerSelection, computerPlay());
    console.log(roundOutcome);
  }
  if (player.score > computer.score) {
    console.log("You are the winner!");
  } else {
    console.log("Computer won. We'll get it next time!");
  }

  resetScores();
}
