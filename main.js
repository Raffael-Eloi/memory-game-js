'use strict';

const myCards = [
  {
    name: 'Walter',
    img: './src/img/walter.png'
  },
  {
    name: 'Skyler',
    img: './src/img/skyler.png'
  },
  {
    name: 'Walter Jr',
    img: './src/img/walter-jr.png'
  },
  {
    name: 'Jesse',
    img: './src/img/jesse.png'
  },
  {
    name: 'Mike',
    img: './src/img/mike.png'
  },
  {
    name: 'Tuco',
    img: './src/img/tuco.png'
  },
  {
    name: 'Saul',
    img: './src/img/saul.png'
  },
  {
    name: 'Gus',
    img: './src/img/gus.png'
  },
  {
    name: 'Hector',
    img: './src/img/hector.png'
  },
  {
    name: 'Todd',
    img: './src/img/todd.png'
  },
  {
    name: 'Hank',
    img: './src/img/hank.png'
  },
  {
    name: 'Heisenberg',
    img: './src/img/heisenberg.png'
  }
];

// You're goddman right

const gameGrid = myCards
  .concat(myCards)
  .sort(() => 0.5 - Math.random());

let firstAttempt = '';
let secondAttempt = '';
let count = 0;
let previousTarget = null;
const delay = 1000;
let hits = 0;

const success = document.querySelector('.success-message');
success.style.display = 'none';

const game = document.querySelector('#game');
const grid = document.createElement('section');

grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstAttempt = '';
  secondAttempt = '';
  count = 0;
  previousTarget = null;

  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

function isValidated (clicked) {
  if (clicked.nodeName === 'SECTION' || 
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')) return false;
  else return true;
}

function showSuccessMessage() {
  const song = document.querySelector('#breaking-bad-song');
  game.style.display = 'none';
  success.style.display = 'flex';
  song.play();
}

grid.addEventListener('click', event => {
  const clicked = event.target;

  if (!isValidated(clicked)) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstAttempt = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondAttempt = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    if (firstAttempt && secondAttempt) {
      if (firstAttempt === secondAttempt) {
        hits++;
        setTimeout(match, delay);
        if (hits === 12) showSuccessMessage();
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
