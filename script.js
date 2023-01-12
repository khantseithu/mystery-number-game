'use strict';

let score = 20;
let highscore = 0;

let randNum = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randNum;

//Select the ‘.check’ element and add an event listener to it.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return;
  }

  //Compare it to the rand number >> if the number is too high: select
  //the ‘.message’ element and change it to “too high”. decrease the score by 1 if the score is greater than 1.
  if (guess > randNum) {
    document.querySelector('.message').textContent = 'Too high!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
  if (guess < randNum) {
    document.querySelector('.message').textContent = 'Too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
  //if the number is correct: select the ‘.message’ element and change it to “correct number!”.
  if (guess === randNum) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = randNum;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
