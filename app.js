// Game - second try

const choices = Math.floor(Math.random() * 3);
//Comp Choice
function getComputerChoice() {
  switch (choices) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Something is Wrong';
  }
}
console.log(getComputerChoice());
//Player Choice
function getPlayerChoice() {
  let playerSelection = prompt('Choose Rock, Paper, or Scissors!');
  return playerSelection.toLowerCase();
}

//PlayRound Function
function playRound(playerSelection, computerSelection) {
  //Game Messages
  const winningMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  const losingMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = "It's a tie! You and the computer chose the same!";
  const errorMessage = `Error! ${playerSelection} is not a valid entry. Please choose "Rock", "Paper", or "Scissors`;

  //Game Mechanics
  if (playerSelection === computerSelection) {
    return tieMessage;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return winningMessage;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return losingMessage;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return winningMessage;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return losingMessage;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return winningMessage;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return losingMessage;
  } else {
    return errorMessage;
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

// function game() {
//   let playerWins = 0;
//   let compWins = 0;

//   for (let i = 0; i < 4; i++) {
//     playRound(getPlayerChoice(), getComputerChoice());
//   }
// }

// game();
