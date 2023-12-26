function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const computer_choice = choices[Math.floor(Math.random() * choices.length)];
  return computer_choice;
}

function playerSelection() {
  let choice = prompt("rock, paper, scissors: ");
  choice = choice.toLowerCase();
  return choice;
}

function playRound(playerAnswer, computerAnswer) {
  if (playerAnswer === computerAnswer) {
    console.log("Draw! Try again");
    return "draw";
  } else if (playerAnswer === "scissors" && computerAnswer === "rock") {
    console.log("You lose! Rock beats scissors");
    return "lose";
  } else if (playerAnswer === "scissors" && computerAnswer === "paper") {
    console.log("You won! Scissors beats paper");
    return "win";
  } else if (playerAnswer === "rock" && computerAnswer === "scissors") {
    console.log("You won! Rock beats scissors");
    return "win";
  } else if (playerAnswer === "rock" && computerAnswer === "paper") {
    console.log("You lose! Paper beats rock");
    return "lose";
  } else if (playerAnswer === "paper" && computerAnswer === "scissors") {
    console.log("You lose! Scissors beats paper");
    return "lose";
  } else if (playerAnswer === "paper" && computerAnswer === "rock") {
    console.log("You won! Paper beats rock");
    return "win";
  }
}

playRound(playerSelection(), computerSelection());
