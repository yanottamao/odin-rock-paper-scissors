function getComputerChoice() {
    const choicesArray = ["Rock","Paper","Scissors"]
    const randomizer = Math.floor(Math.random() * choicesArray.length)
    console.log(choicesArray[randomizer])
}