'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dieEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dieEl.classList.add('hidden');

// Players variables
let currentScoreP0 = 0;
let currentScoreP1 = 0;
let totalScoreP0 = 0;
let totalScoreP1 = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const die = Math.floor(Math.random() * 6) + 1;

  // 2. Display dice
  dieEl.classList.remove('hidden');
  dieEl.src = `dice-${die}.png`;
  if (die !== 1) {
    currentScoreP0 += die;
    current0El.textContent = currentScoreP0;
  } else {
    // Switch to the next player
    currentScoreP0 = 0;
    current0El.textContent = currentScoreP0;
  }
});
