'use strict';
/*
// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!👍';
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // document.querySelector('.number').textContent = secretNumber;
// let score = 20;
// let highScore = 0;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (score > 1) {
//     //when no input
//     if (!guess) {
//       document.querySelector('.message').textContent = 'No Number! 🤷‍♀️';
//       //when player wins
//     } else if (guess === secretNumber) {
//       document.querySelector('.message').textContent = 'Correct Number!👍';
//       document.querySelector('body').style.backgroundColor = '#60b347';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.number').style.width = '30rem';
//       if (score > highScore) {
//         highScore = score;
//         document.querySelector('.highscore').textContent = highScore;
//       }

//       //when guess to high
//     } else if (guess > secretNumber) {
//       document.querySelector('.message').textContent = '📈Number too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //when guess too low
//     } else if (guess > 0 && guess < secretNumber) {
//       document.querySelector('.message').textContent = '📉Number too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game 🤡';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#da1010';
//     document.querySelector('.number').textContent = '🤡';
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = ' ';
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
// });
const randomNum = function () {
  const num = Math.trunc(Math.random() * 20) + 1;
  return num;
};
let secretNumber = randomNum();
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;

  // No input
  if (guess === 0) {
    displayMessage('No number selected');
    //win
  } else if (guess === secretNumber) {
    displayMessage('You Win');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    //doesent win
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    score--;
  } else {
    displayMessage('You lose!');
    document.querySelector('body').style.backgroundColor = '#b61616';
    score = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
