'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number! ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 21;

// // USE .VALUE FOR INPUTS
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

// Generate a secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number '
    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number! ';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the player guesses too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER! ';
      document.querySelector('.score').textContent = 0;
    }
    // When the player guesses too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low! '
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER! ';
      document.querySelector('.score').textContent = 0;
    }

  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = '20';
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // USE .VALUE FOR INPUTS
  document.querySelector('.guess').value = '';
})

