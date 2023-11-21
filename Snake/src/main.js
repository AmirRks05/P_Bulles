const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const BlockSize = 40;
const snake = [{ x: 280, y: 360 }];
let value = 0;
let dx = BlockSize;
let dy = 0;

const move = () => {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Boucle qui vérifie si le serpent touche les bords et affiche l'alerte avec le score
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    alert("Perdu, votre score est " + value);
    location.reload();
  }

  snake.unshift(head);

  if (snake.length > value) {
    snake.pop();
  }

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = 'rgb(15, 199, 39)';
  snake.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, BlockSize, BlockSize);
  });

  ctx.font = '15px arial'
  ctx.fillStyle = 'white';
  ctx.fillText('Score : ' + value, 20, 30)

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 80);
};

// Permettre de déplacer le serpent avec les différentes touches possibles
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      dx = 0;
      dy = -BlockSize;
      break;
    case 'ArrowDown':
    case 's':
      dx = 0;
      dy = BlockSize;
      break;
    case 'ArrowLeft':
    case 'a':
      dx = -BlockSize; 
      dy = 0;
      break;
    case 'ArrowRight':
    case 'd':
      dx = BlockSize;
      dy = 0;
      break;
  }
});

requestAnimationFrame(move);