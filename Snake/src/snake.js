/**
 * Lieu        : ETML, Sébeillon
 * Auteur      : Amir Zeqiri
 * Date        : 09.01.2024
 * Description : Page de la classe Snake en JavaScript du projet bulles (Snake en JS)
 */

// Définition de la classe Snake
export class Snake {

  // Constructeur de la classe
  constructor(canvas, ctx, BlockSize, score, apple) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.BlockSize = BlockSize;
    this.score = score;
    this.apple = apple;

    // Initialisation du corps du serpent avec une position de départ
    this.body = [{ x: 280, y: 360 }];

    // Initialisation des variables de déplacement du serpent
    this.dx = BlockSize;
    this.dy = 0;
  }

  // Méthode pour gérer le déplacement du serpent
  move() {
    // Calcul de la nouvelle position de la tête du serpent
    const head = { x: this.body[0].x + this.dx, y: this.body[0].y + this.dy };

    // Vérification des collisions avec les bords du canvas
    if (
      head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height || this.checkSelfCollision(head) // Nouvelle vérification pour la collision avec le corps
    ) {
      // Affichage d'une alerte en cas de collision avec les bords ou le corps
      alert("Perdu, votre score est " + this.score);
      // Rechargement de la page pour recommencer le jeu
      location.reload();
    }

    // Gestion de la collision avec la pomme
    if (head.x === this.apple.x && head.y === this.apple.y) {
      // Incrémentation du score et génération d'une nouvelle pomme
      this.score++;
      this.apple.generate();
    } else {
      // Suppression du dernier segment du corps du serpent s'il n'y a pas de collision avec la pomme
      this.body.pop();
    }

    // Ajout de la nouvelle tête à la position initiale du corps
    this.body.unshift(head);

    // Dessin du fond du canvas
    this.ctx.fillStyle = "rgb(0, 0, 0, 0.45)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Dessin de la pomme
    this.apple.draw();

    // Dessin du corps du serpent
    this.ctx.fillStyle = "rgb(15, 200, 39)";
    this.body.forEach((segment) => {
      this.ctx.fillRect(segment.x, segment.y, this.BlockSize, this.BlockSize);
    });

    // Affichage du score
    this.ctx.font = "bold 18px arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("🍎 " + this.score, 20, 33);

    // Appel récursif de la méthode move avec une temporisation
    setTimeout(() => {
      requestAnimationFrame(() => this.move());
    }, 90);
  }

  // Méthode pour vérifier la collision avec le corps du serpent
  checkSelfCollision(head) {
    for (let i = 1; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        return true; // Collision avec le corps détectée
      }
    }
    return false; // Pas de collision avec le corps
  }
}
