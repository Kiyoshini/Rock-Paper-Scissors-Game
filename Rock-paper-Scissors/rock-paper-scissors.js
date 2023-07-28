let wonScore = document.querySelector('.won-score').innerHTML;

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = {
  wins:  0,
  loses: 0,
  ties: 0,
  };
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
    result = 'You lose.'
    } else if (computerMove === 'Paper') {
    result = 'You win.'
    } else if (computerMove === 'Scissors') {
    result = 'Tie.'
    }
  }

  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'You win.'
    } else if (computerMove === 'Paper') {
    result = 'Tie.'
    } else if (computerMove === 'Scissors') {
    result = 'You lose.'
    }
  }

  else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'Tie.'
    } else if (computerMove === 'Paper') {
    result = 'You lose.'
    } else if (computerMove === 'Scissors') {
    result = 'You win.'
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.loses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  console.log(score);

  alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`);
}

function pickComputerMove () {
  const randomNumber = Math.random();

  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'Scissors';
  }
  return computerMove;
} 

function clearScore () {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
}