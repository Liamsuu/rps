function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const computer_choice = choices[Math.floor(Math.random() * choices.length)];
  return computer_choice;
}
function correctUserValue(selection) {
  selection = selection.toLowerCase();
  if (selection == "rock" || selection == "paper" || selection == "scissors") {
    return true;
  } else {
    return false;
  }
}

function playerSelection() {
  let choice = prompt("rock, paper, scissors: ");
  choice = choice.toLowerCase();
  while (
    choice === null ||
    choice === "" ||
    correctUserValue(choice) == false
  ) {
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
  let wins = 0;
  for (let x = 1; x <= 5; x++) {
    console.log("Round " + x);
    win_text = playRound(playerSelection(), computerSelection());
    console.log(win_text);
    if (win_text.includes("won!")) {
      wins++;
    }
  }

  if (wins >= 3) {
    console.log(`You won overall with ${wins} wins.`);
  } else {
    console.log("YOU LOST OVERALL!");
    console.log(`The computer won overall with ${5 - wins} wins.`);
  }
}

game();
