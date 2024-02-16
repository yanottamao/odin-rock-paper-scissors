const choicesArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomizer = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomizer];
}

function getPlayerChoice() {
  const playerSelectionPrompt = prompt("Enter your choice: ");
  const firstLetter = playerSelectionPrompt.charAt(0).toUpperCase();
  const restOfText = playerSelectionPrompt.substring(1).toLowerCase();
  return firstLetter + restOfText;
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
