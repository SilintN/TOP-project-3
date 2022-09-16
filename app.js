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
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'Player Wins! Rock beats Scissors';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'Player Loses! Rock loses to Paper';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'Player Wins! Paper beats Rock!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'Player Loses! Paper loses to Scissors';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'Player Wins! Scissors beats Paper!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'Player Loses! Scissors lose to Rock';
  } else {
    return 'Something Broke!';
  }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
