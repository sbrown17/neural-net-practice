export class Creature {
  constructor(outputFeed, x, y) {
    this.position = new p5.Vector(x, y); // x: 200, y: 200, z: 0
    this.outputNodeWeights = outputFeed; // empty []
    this.velocity = this.outputNodeWeights[0]; // undefined
    this.r = this.outputNodeWeights[1]; // undefined
    this.m = this.r * 0.1; // NaN
    this.color = Math.floor(Math.random() * 999);
  }
  
  update() {
    this.position.add(this.velocity);
  }

  
}
