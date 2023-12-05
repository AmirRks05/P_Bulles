import { Snake } from './snake.js';
import { Apple } from './apple.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const BlockSize = 40;
let score = 0;

const apple = new Apple(canvas, ctx, BlockSize);
const snake = new Snake(canvas, ctx, BlockSize, score, apple);

// Permettre de déplacer le serpent avec les différentes touches possibles
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      snake.dx = 0;
      snake.dy = -BlockSize;
      break;
    case 'ArrowDown':
    case 's':
      snake.dx = 0;
      snake.dy = BlockSize;
      break;
    case 'ArrowLeft':
    case 'a':
      snake.dx = -BlockSize;
      snake.dy = 0;
      break;
    case 'ArrowRight':
    case 'd':
      snake.dx = BlockSize;
      snake.dy = 0;
      break;
  }
});

requestAnimationFrame(() => snake.move());