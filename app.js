const choicesArray = ["Rock", "Paper", "Scissors"];
playerWinCount = 0;
computerWinCount = 0;

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

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection == computerSelection)
    return `It's DRAW - Player : ${playerSelection} - Computer : ${computerSelection}`;
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerWinCount++;
    return `Computer WINS - Player : ${playerSelection} - Computer : ${computerSelection}`;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerWinCount++;
    return `Player WINS - Player : ${playerSelection} - Computer : ${computerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerWinCount++;
    return `Player WINS - Player : ${playerSelection} - Computer : ${computerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerWinCount++;
    return `Computer WINS - Player : ${playerSelection} - Computer : ${computerSelection}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerWinCount++;
    return `Computer WINS - Player : ${playerSelection} - Computer : ${computerSelection}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWinCount++;
    return `Player WINS - Player : ${playerSelection} - Computer : ${computerSelection}`;
  }
}

function playGame() {
  const playNumber = prompt("Enter playing times : (Number)");
  console.log(playNumber);
  if (!isNaN(playNumber)) {
    console.log(playNumber);
    for (let index = 0; index < playNumber; index++) {
      playRound();
    }
    console.log(computerWinCount);
    console.log(playerWinCount);
    if (computerWinCount > playerWinCount) {
      console.log("Computer Win the games");
    } else if (computerWinCount < playerWinCount) {
      console.log("Player Win the games");
    } else console.log("It's DRAW");
  } else {
    console.log("NAN");
    return playGame();
  }
}
