//Game

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
getComputerChoice();

const computerSelection = getComputerChoice();
const playerSelection = prompt('Choose Rock, Paper, or Scissors!');

function playRound() {
  if (playerSelection === computerSelection) {
    return 'Tie';
  } else if (playerSelection > computerSelection) {
    return 'Player Wins';
  } else playerSelection < computerSelection;
  return 'Computer Wins';
}

playRound();

console.log(playRound());

function game() {}
