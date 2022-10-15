// Game - second try

//Comp Choice
function getComputerChoice() {
  const choices = Math.floor(Math.random() * 3);

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

// Actual Game function
/*I had massive troubles with this part of the game. Idk what it was, maybe i tried making it to complicated to quickly
by adding scores and different variables. I shouldve kept to what was asked and stayed simple. Probably wouldve saved me two weeks lol.*/

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      'Choose Rock, Paper, or Scissors!'
    ).toLowerCase();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
