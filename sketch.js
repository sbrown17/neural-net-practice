//import {Creature as Creature} from './creature.js';
class Creature {
  constructor(outputFeed, x, y) {
    this.position = new p5.Vector(x, y);
    this.outputNodeWeights = outputFeed;
    this.velocity = this.outputNodeWeights[0];
    this.r = this.outputNodeWeights[1];
    this.m = this.r * 0.1;
    this.color = Math.floor(Math.random() * 999);
  }
  
  update(population) {
    this.position.add(this.velocity);
    // check inputs ie. food distance? others distance? etc... or just generate them at random here
    // pass in population and if the distance is greater than 0, then it's someone else
    feedForward(population);
  }

  display(){
    //noStroke();
    fill(300);
    ellipse(this.position.x, this.position.y, 10);
  }
}
function getCreatureDistances(population) {
  let distances = [];
  for (const creature in population) {
    let distance = p5.Vector.dist(this.position, creature.position);
    if (distance > 0)
      distances.push(distance);
  }
}

function feedForward(population) {
  let distancesToOthers = getCreatureDistances(population);
  let outputNodeWeights = [];
  const input_nodes = creatures;
  for (const node of input_nodes) {
    //each node can have multiple output pointers, but we will leave it at 1 for testing
    for (let i = 0; i < node.output_pointers.length; i++) {

      // output_pointers and outputNodeWeights should match eventually through the loop
      if (node.output_pointers.length <= outputNodeWeights.length) {
        // if there is no outputNodeWeight assigned to an output_pointer then push one to the outputNodeWeightArray, we will add weight to it after
        if (outputNodeWeights[node.output_pointers[i]] === undefined) {
          outputNodeWeights.push(node.output_pointers[i])
        }
        // it is later, add da weight
        outputNodeWeights[node.output_pointers[i]] += node.connection_weights[i];
      } else if (outputNodeWeights.length === 0) {
        outputNodeWeights.push(node.connection_weights[i]);
      }  
    }
  }
  return outputNodeWeights;
}

const outputFeed = feedForward()
console.log('outputFeed: ', outputFeed);
let creatures = [new Creature(outputFeed, 200, 200)];
// pass food into c.update(creatures); later
let food;
console.log(creatures);

function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(220);
  for (let i = 0; i < creatures.length; i++) {
    let c = creatures[i];
    c.update(creatures);
    c.display();
  }
}
