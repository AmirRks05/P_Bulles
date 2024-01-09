/**
 * Lieu        : ETML, Sébeillon
 * Auteur      : Amir Zeqiri
 * Date        : 09.01.2024
 * Description : Page principale en JavaScript du projet bulles (Snake en JS)
 */

// Importation des classes Snake et Apple depuis les fichiers correspondants
import { Snake } from './snake.js';
import { Apple } from './apple.js';

// Sélection du canvas et récupération du contexte 2D
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Taille d'un bloc sur le canvas
const BlockSize = 40;

// Initialisation du score à zéro
let score = 0;

// Création d'une instance de la classe Apple et d'une instance de la classe Snake
const apple = new Apple(canvas, ctx, BlockSize);
const snake = new Snake(canvas, ctx, BlockSize, score, apple);

// Gestion des événements clavier pour déplacer le serpent
window.addEventListener('keydown', (event) => {
  // Switch pour gérer différentes touches de direction
  switch (event.key) {
    // Déplacement vers le haut
    case 'ArrowUp':
    case 'w':
      // Vérification pour éviter un déplacement inverse
      if (snake.dy !== BlockSize) {
        snake.dx = 0;
        snake.dy = -BlockSize;
      }
      break;

    // Déplacement vers le bas
    case 'ArrowDown':
    case 's':
      // Vérification pour éviter un déplacement inverse
      if (snake.dy !== -BlockSize) {
        snake.dx = 0;
        snake.dy = BlockSize;
      }
      break;

    // Déplacement vers la gauche
    case 'ArrowLeft':
    case 'a':
      // Vérification pour éviter un déplacement inverse
      if (snake.dx !== BlockSize) {
        snake.dx = -BlockSize;
        snake.dy = 0;
      }
      break;

    // Déplacement vers la droite
    case 'ArrowRight':
    case 'd':
      // Vérification pour éviter un déplacement inverse
      if (snake.dx !== -BlockSize) {
        snake.dx = BlockSize;
        snake.dy = 0;
      }
      break;
  }
});

// Boucle principale du jeu avec la fonction move du serpent appelée à chaque frame
requestAnimationFrame(() => snake.move());
