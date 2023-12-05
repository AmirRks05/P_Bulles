export class Snake {
    constructor(canvas, ctx, BlockSize, score, apple) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.BlockSize = BlockSize;
      this.score = score;
      this.apple = apple;
  
      this.body = [{ x: 280, y: 360 }];
      this.dx = BlockSize;
      this.dy = 0;
    }
  
    move() {
      const head = { x: this.body[0].x + this.dx, y: this.body[0].y + this.dy };
  
      if (head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height) {
        alert("Perdu, votre score est " + this.score);
        location.reload();
      }
  
      if (head.x === this.apple.x && head.y === this.apple.y) {
        this.score++;
        this.apple.generate();
      } else {
        this.body.pop();
      }
  
      this.body.unshift(head);
  
      this.ctx.fillStyle = 'rgb(0, 0, 0, 0.45)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
      this.apple.draw();
  
      this.ctx.fillStyle = 'rgb(15, 200, 39)';
      this.body.forEach((segment) => {
        this.ctx.fillRect(segment.x, segment.y, this.BlockSize, this.BlockSize);
      });
  
      this.ctx.font = 'bold 18px arial';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('🍎 ' + this.score, 20, 33);
  
      setTimeout(() => {
        requestAnimationFrame(() => this.move());
      }, 90);
    }
  }