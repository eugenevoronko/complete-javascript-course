'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const dieEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let gameIsActive = true;
let currentScore = 0;
let activePlayer = 0;

function initializeTheGame() {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  dieEl.classList.add('hidden');
  btnRoll.disabled = false;
  btnHold.disabled = false;
  gameIsActive = true;
}

initializeTheGame();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (gameIsActive) {
    // 1. Generating a random dice roll
    const die = Math.floor(Math.random() * 6) + 1;

    // 2. Display dice
    dieEl.classList.remove('hidden');
    dieEl.src = `dice-${die}.png`;
    if (die !== 1) {
      currentScore += die;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold score functionality
btnHold.addEventListener('click', function () {
  if (gameIsActive) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      dieEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      btnRoll.disabled = true;
      btnHold.disabled = true;
      gameIsActive = false;
    } else {
      dieEl.classList.add('hidden');
      switchPlayer();
    }
  }
});

// Add New game handler to reset and re-enable buttons
btnNew.addEventListener('click', initializeTheGame);
