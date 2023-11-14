const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const TailleCarre = 40;

const snake = [
  { x: 280, y: 360 }
];

let dx = TailleCarre;
let dy = 0;

const move = () => {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  if (snake.length > 3) {
    snake.pop();
  }

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgb(15, 199, 39)';
  snake.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, TailleCarre, TailleCarre);
  });

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 80);

};

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
    case '8':
      dx = 0;
      dy = -TailleCarre;
      break;
    case 'ArrowDown':
    case 's':
    case '2':
      dx = 0;
      dy = TailleCarre;
      break;
    case 'ArrowLeft':
    case 'a':
    case '4':
      dx = -TailleCarre;
      dy = 0;
      break;
    case 'ArrowRight':
    case 'd':
    case '6':
      dx = TailleCarre;
      dy = 0;
      break;
  }
});
requestAnimationFrame(move);