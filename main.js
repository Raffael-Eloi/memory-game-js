'use strict';

const myCards = [
  {
    name: 'Walter',
    img: 'src/img/walter.png'
  },
  {
    name: 'Skyler',
    img: 'src/img/skyler.png'
  },
  {
    name: 'Walter Jr',
    img: 'src/img/walter-jr.png'
  },
  {
    name: 'Jesse',
    img: 'src/img/jesse.png'
  },
  {
    name: 'Mike',
    img: 'src/img/mike.png'
  },
  {
    name: 'Tuco',
    img: 'src/img/tuco.png'
  },
  {
    name: 'Saul',
    img: 'src/img/saul.png'
  },
  {
    name: 'Gus',
    img: 'src/img/gus.png'
  },
  {
    name: 'Hector',
    img: 'src/img/hector.png'
  },
  {
    name: 'Todd',
    img: 'src/img/todd.png'
  },
  {
    name: 'Hank',
    img: 'src/img/hank.png'
  },
  {
    name: 'Heisenberg',
    img: 'src/img/heisenberg.png'
  }
];

const backgroundCard = { name: 'Background', img: './src/img/background-card.png' };

const game = document.querySelector('#game');

myCards.concat(myCards).forEach(
  card => {
    let description = document.createElement('p');
    description.textContent = card.name;
    
    
    
    let image = document.createElement('div');
    image.classList.add("eachCard");
    image.style.backgroundImage = `url(${card.img})`;
    
    game.appendChild(image);
    game.appendChild(description);
  }
)