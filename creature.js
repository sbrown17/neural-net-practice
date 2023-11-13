export class Creature {
    constructor(feedForward, x, y) {
    this.position = new p5.Vector(x, y);
    this.outputNodeWeights = feedForward();
    this.velocity = this.outputNodeWeights[0];
    this.r = this.outputNodeWeights[1];
    this.m = this.r * 0.1;
    this.color = Math.random(0, 999);
  }
  
  update() {
    this.position.add(this.velocity);
  }

  
}
