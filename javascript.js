function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const computer_choice = choices[Math.floor(Math.random() * choices.length)];
  return computer_choice;
}

function playRound(playerAnswer, computerAnswer) {
  if (playerAnswer === computerAnswer) {
    return "Draw! Try again.";
  } else if (playerAnswer === "scissors" && computerAnswer === "rock") {
    return "You lose! Rock beats scissors";
  } else if (playerAnswer === "scissors" && computerAnswer === "paper") {
    return "You won! Scissors beats paper";
  } else if (playerAnswer === "rock" && computerAnswer === "scissors") {
    return "You won! Rock beats scissors";
  } else if (playerAnswer === "rock" && computerAnswer === "paper") {
    return "You lose! Paper beats rock";
  } else if (playerAnswer === "paper" && computerAnswer === "scissors") {
    return "You lose! Scissors beats paper";
  } else if (playerAnswer === "paper" && computerAnswer === "rock") {
    return "You won! Paper beats rock";
  }
}

const player_rock = document.querySelector("#rock-selector");
const player_paper = document.querySelector("#paper-selector");
const player_scissors = document.querySelector("#scissors-selector");
const reset_game = document.querySelector("#reset-selector");
let player_wins = 0;
let comp_wins = 0;
const player_tracker = document.createElement("div");
const comp_tracker = document.createElement("div");
document.body.appendChild(player_tracker);
document.body.appendChild(comp_tracker);

player_rock.addEventListener("click", () => {
  if (document.getElementById("winnerdiv") === null) {
    let win_text = playRound("rock", computerSelection());
    if (win_text.includes("won!")) {
      player_wins++;
      player_tracker.textContent = `Player wins: ${player_wins}`;
    } else {
      comp_wins++;
      comp_tracker.textContent = `Computer wins: ${comp_wins}`;
    }
    displayWinner(player_wins, comp_wins);
  }
});

player_paper.addEventListener("click", () => {
  if (document.getElementById("winnerdiv") === null) {
    const win_text = playRound("paper", computerSelection());
    if (win_text.includes("won!")) {
      player_wins++;
      player_tracker.textContent = `Player wins: ${player_wins}`;
    } else {
      comp_wins++;
      comp_tracker.textContent = `Computer wins: ${comp_wins}`;
    }
    displayWinner(player_wins, comp_wins);
  }
});

player_scissors.addEventListener("click", () => {
  if (document.getElementById("winnerdiv") === null) {
    const win_text = playRound("scissors", computerSelection());
    if (win_text.includes("won!")) {
      player_wins++;
      player_tracker.textContent = `Player wins: ${player_wins}`;
    } else {
      comp_wins++;
      comp_tracker.textContent = `Computer wins: ${comp_wins}`;
    }
    displayWinner(player_wins, comp_wins);
  }
});

reset_game.addEventListener("click", () => {
  player_wins = 0;
  comp_wins = 0;
  player_tracker.textContent = "";
  comp_tracker.textContent = "";
  if (document.getElementById("winnerdiv") !== null) {
    const winner = document.getElementById("winnerdiv");
    winner.remove();
  }
});

function displayWinner(player, computer) {
  if (player == 5 || computer == 5) {
    if (player == 5) {
      const player_div = document.createElement("div");
      document.body.appendChild(player_div);
      player_div.id = "winnerdiv";
      player_div.style = "color: blue";
      player_div.textContent = "THE PLAYER WON";
    } else if (computer == 5) {
      const comp_div = document.createElement("div");
      document.body.appendChild(comp_div);
      comp_div.id = "winnerdiv";
      comp_div.style = "color: red";
      comp_div.textContent = "THE COMPUTER WON";
    }
  }
}
