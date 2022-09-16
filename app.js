//Game - first try

/* let choices = ['Rock', 'Paper', 'Scissors'];

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
*/

// Game - second try

// compChoice is the first variable used to get the computers choice randomly using the Math.random method
// let compChoice = getComputerChoice();
// let playerChoice = prompt('Choose Rock, Paper, or Scissors!');

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      console.log('Rock');
      break;
    case 1:
      console.log('Paper');
      break;
    case 2:
      console.log('Scissors');
      break;
    default:
      console.log('Something is Wrong');
  }
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('Tie!');
  } else if (playerSelection > computerSelection) {
    console.log('You win!');
  } else if (playerSelection < computerSelection) {
    console.log('You lose!');
  } else {
    console.log('Something Broke!');
  }
}

playRound();

// console.log(playRound());
