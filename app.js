const choicesArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomizer = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomizer];
}

function getPlayerChoice() {
  const playerSelectionPrompt = prompt(
    "Enter your choice: (Rock/Paper/Scissors)"
  );
  const firstLetter = playerSelectionPrompt.charAt(0).toUpperCase();
  const restOfText = playerSelectionPrompt.substring(1).toLowerCase();
  const playerChoice = firstLetter + restOfText;
  if (choicesArray.includes(playerChoice)) {
    console.log(playerChoice);
    return playerChoice;
  } else {
    alert(`Please enter "Rock or Paper or Scissors" to continue`);
    return getPlayerChoice();
  }
}

function playGame() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection == computerSelection)
    console.log(
      `It's DRAW - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
  else if (playerSelection == "Rock" && computerSelection == "Paper")
    console.log(
      `Computer WINS - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
  else if (playerSelection == "Rock" && computerSelection == "Scissors")
    console.log(
      `Player WINS - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
  else if (playerSelection == "Paper" && computerSelection == "Rock")
    console.log(
      `Player WINS - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
  else if (playerSelection == "Paper" && computerSelection == "Scissors")
    console.log(
      `Computer WINS - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
  else if (playerSelection == "Scissors" && computerSelection == "Rock")
    console.log(
      `Computer WINS - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
  else if (playerSelection == "Scissors" && computerSelection == "Paper")
    console.log(
      `Player WINS - Player : ${playerSelection} - Computer : ${computerSelection}`
    );
}
