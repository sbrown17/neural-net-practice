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
  
  update() {
    this.position.add(this.velocity);
    // check inputs ie. food distance? others distance? etc... or just generate them at random here
    // would be cool to introduce some emergent method for gaining function
  }

  display() {
    //noStroke();
    fill(300);
    ellipse(this.position.x, this.position.y, 10);
  }
}
function generateInputNodes() {
  // int id of which output (there should be a fixed number based on creature)
  // the node is pointing to (it can be more than one? maybe.. let's keep it 1 for now)
  // currently there should just be movement and rotation
  const output_pointer_array = [0, 1];
  const nodes = [
    {
      output_pointers: [output_pointer_array[0]],
      connection_weights: [Math.floor(Math.random() * 2)] // this array may need to be constructed in a function then just assign this to the function call.
    },
    {
      output_pointers: [output_pointer_array[1]],
      connection_weights: [Math.random()] // this array may need to be constructed in a function then just assign this to the function call.
    }
  ];
    return nodes;
}


function feedForward() {
  let outputNodeWeights = [];
  const input_nodes = generateInputNodes();
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
console.log(creatures);

function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(220);
  for (let i = 0; i < creatures.length; i++) {
    let c = creatures[i];
    c.update();
    c.display();
  }
}