'use strict';

const generateRandomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};
function updateMessage(message) {
  document.querySelector('.message').textContent = message;
}
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  score = 20;
  updateMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const rawGuess = document.querySelector('.guess').value;
  const guess = Number(document.querySelector('.guess').value);

  if (score <= 1) {
    updateMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
    return;
  }

  if (!rawGuess) {
    updateMessage('⛔ No number!');
  } else if (guess !== secretNumber) {
    updateMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    updateMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
