'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉correct answer!!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; //To generate a random number between 1-20

let score = 20; //we used let as it varies...we use it in immutable case..

let highscore = 0;

//creating displayMessage function to reuse it again and again

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When it is wrong guess

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔NO NUMBER!';
    displayMessage('⛔NO NUMBER!');
  }

  //when player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉correct answer!!';
    displayMessage('🎉correct answer!!');
    document.querySelector('.number').textContent = secretNumber; //only reveals when player wins until that it remains ?

    document.querySelector('body').style.backgroundColor = '#60b347'; //use camelcase for css style in js and as body is simply elt name it is declared in quotes simply.
    document.querySelector('.number').style.width = '30rem';

    //Updating highscore based on the previous scores
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Too high!' : '📉Too Low!';

      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too Low!');

      score--; //As it wrong guess score should be decrement by 1
      document.querySelector('.score').textContent = score; //Score is displaying after the each wrong prediction.
    } else {
      //document.querySelector('.message').textContent = '🔥 You Lost the game';

      displayMessage('🔥 You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*

  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--; //As it wrong guess score should be decrement by 1
      document.querySelector('.score').textContent = score; //Score is displaying after the each wrong prediction.
    } else {
      document.querySelector('.message').textContent = '🔥 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      //Only performs if score is greater than 1;
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔥 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //document.querySelector('.number').textContent = guess;
});   */

//Onclick of again button should restore everything into back
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
