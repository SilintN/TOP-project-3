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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert('Tie!');
    return 'No Score Added';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    alert('Player Wins! Rock beats Scissors');
    return playerWins;
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    alert('Player Loses! Rock loses to Paper');
    return compWins;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert('Player Wins! Paper beats Rock!');
    return playerWins;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    alert('Player Loses! Paper loses to Scissors');
    return compWins;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    alert('Player Wins! Scissors beats Paper!');
    return playerWins;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    alert('Player Loses! Scissors lose to Rock');
    return compWins;
  } else {
    return 'Something Broke!';
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerWins = 0;
let compWins = 0;

console.log(playRound(playerSelection, computerSelection));
//console.log(playerWins, compWins);
