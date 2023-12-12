export class Apple {
  constructor(canvas, ctx, BlockSize) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.BlockSize = BlockSize;
    this.generate();
  }

  generate() {
    this.x = Math.floor(Math.random() * (this.canvas.width / this.BlockSize)) * this.BlockSize;
    this.y = Math.floor(Math.random() * (this.canvas.height / this.BlockSize)) * this.BlockSize;
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.BlockSize, this.BlockSize);
  }
}