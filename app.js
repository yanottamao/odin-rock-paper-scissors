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
