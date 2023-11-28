const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const BlockSize = 40;

const snake = [{ x: 280, y: 360 }];
let value = 0; // Score au début de la partie
let dx = BlockSize;
let dy = 0;

let apple = affichePomme();

function affichePomme() {
  const x = Math.floor(Math.random() * (canvas.width / BlockSize)) * BlockSize;
  const y = Math.floor(Math.random() * (canvas.height / BlockSize)) * BlockSize;
  return { x, y };
}

function dessinePomme() {
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.x, apple.y, BlockSize, BlockSize);
}

const move = () => {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Boucle qui vérifie si le serpent touche les bords et affiche l'alerte avec le score
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    alert("Perdu, votre score est " + value);

    location.reload();
  }

  // Vérifie si le serpent a mangé la pomme
  if (head.x === apple.x && head.y === apple.y) {
    value++; // Incrémente le score
    apple = affichePomme(); // Affiche une nouvelle pomme
  } else {
    snake.pop();
  }

  snake.unshift(head);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  dessinePomme(); // Affiche la pomme

  ctx.fillStyle = 'rgb(15, 200, 39)';
  snake.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, BlockSize, BlockSize);
  });

  ctx.font = 'bold 18px arial';
  ctx.fillStyle = 'white';
  ctx.fillText('🍎 ' + value, 20, 33);

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 90);
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