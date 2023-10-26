
export default class Creature {
    constructor(x, y, r) {
    this.position = new p5.Vector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(3);
    this.r = r;
    this.m = r * 0.1;
  }
  update() {
    this.position.add(this.velocity);
  }
}