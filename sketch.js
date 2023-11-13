import {Creature as Creature} from './creature.js';

function generateInputNodes() {
    // int id of which output (there should be a fixed number based on creature)
    // the node is pointing to (it can be more than one? maybe.. let's keep it 1 for now)
    // currently there should just be movement and rotation
    const output_pointer_array = [0, 1];
    return [
	{
	    output_pointers: [].push(output_pointer_array[0]),
	    connection_weights: [].push(Math.floor(Math.random() * 2))
        },
	{
	    output_pointers: [].push(output_pointer_array[1]),
	    connection_weights: [].push(Math.random())
	}
    ];
}

const input_nodes = generateInputNodes();

function feedForward() {
    let outputNodeWeights = [];
    input_nodes.forEach((node) => {
        
        for (let i = 0; i < node.output_pointers.length; i++){
            outputNodeWeights[node.output_pointers[i]] += node.connection_weights[i];
        }
    });
    return outputNodeWeights;
}

let creatures = [new Creature(feedForward, 200, 200)];
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
