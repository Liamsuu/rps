function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const computer_choice = choices[Math.floor(Math.random() * choices.length)];
  return computer_choice;
}

function playerSelection() {
  let choice = prompt("rock, paper, scissors: ");
  choice = choice.toLowerCase();
  while (choice === null || choice === "") {
    choice = prompt("rock, paper, scissors: ");
  }

  choice = choice.toLowerCase();
  return choice;
}

function playRound(playerAnswer, computerAnswer) {
  if (playerAnswer === computerAnswer) {
    console.log("Draw! Try again");
    let player_redo = playerSelection();
    let computer_redo = computerSelection();
    return playRound(player_redo, computer_redo);
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

function game() {
  for (let x = 1; x <= 5; x++) {
    console.log("Round " + x);
    console.log(playRound(playerSelection(), computerSelection()));
  }
}

game();

// the game can not yet handle null
