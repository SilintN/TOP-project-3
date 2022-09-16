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

const choices = Math.floor(Math.random() * 3);

function getComputerChoice() {
  switch (choices) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
    default:
      return 'Something is Wrong';
  }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (playerSelection > computerSelection) {
    return 'You win!';
  } else if (playerSelection < computerSelection) {
    return 'You lose!';
  } else {
    return 'Something Broke!';
  }
}

const playerSelection = 'Scissors';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
