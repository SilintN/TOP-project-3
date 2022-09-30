// Game - second try

const choices = Math.floor(Math.random() * 3);

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

function getPlayerChoice() {
  let playerSelection = prompt('Choose Rock, Paper, or Scissors!');
  return playerSelection.toLowerCase();
}
//console.log(getPlayerChoice());
let playerWins = 0;
let compWins = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie! No Score Added';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerWins++;
    return 'Player Wins! Rock beats Scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compWins++;
    return 'Player Loses! Rock loses to Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerWins++;
    return 'Player Wins! Paper beats Rock!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compWins++;
    return 'Player Loses! Paper loses to Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerWins++;
    return 'Player Wins! Scissors beats Paper!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compWins++;
    return 'Player Loses! Scissors lose to Rock';
  } else {
    return 'Something Broke!';
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log(playerWins, compWins);

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// }

// game();
