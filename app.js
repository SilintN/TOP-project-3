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

function getPlayerChoice() {
  let playerSelection = prompt('Choose Rock, Paper, or Scissors!');
  return playerSelection;
}
//console.log(getPlayerChoice());
let playerWins = 0;
let compWins = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert('Tie!');
    return 'No Score Added';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerWins++;
    return 'Player Wins! Rock beats Scissors';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    compWins++;
    return 'Player Loses! Rock loses to Paper';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerWins++;
    return 'Player Wins! Paper beats Rock!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    compWins++;
    return 'Player Loses! Paper loses to Scissors';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWins++;
    return 'Player Wins! Scissors beats Paper!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
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

function game() {
  for (let i = 0; i < 5; i++) {
    return;
  }
}

game();
