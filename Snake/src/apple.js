/**
 * Lieu        : ETML, Sébeillon
 * Auteur      : Amir Zeqiri
 * Date        : 09.01.2024
 * Description : Page de la classe Apple en JavaScript du projet bulles (Snake en JS)
 */

// Définition de la classe Apple
export class Apple {

  // Constructeur de la classe Apple
  constructor(canvas, ctx, BlockSize) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.BlockSize = BlockSize;

    // Génération d'une nouvelle position pour la pomme
    this.generate();
  }

  // Méthode pour générer une nouvelle position pour la pomme
  generate() {
    // Calcul d'une position aléatoire en fonction de la taille des blocs du canvas
    this.x = Math.floor(Math.random() * (this.canvas.width / this.BlockSize)) * this.BlockSize;
    this.y = Math.floor(Math.random() * (this.canvas.height / this.BlockSize)) * this.BlockSize;
  }

  // Méthode pour dessiner la pomme sur le canvas
  draw() {
    // Dessin d'un rectangle rouge représentant la pomme
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.BlockSize, this.BlockSize);
  }
}
