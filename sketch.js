import {Creature as Creature} from './creature.js';

function generateInputNodes() {
    // int id of which output (there should be a fixed number based on creature)
    // the node is pointing to (it can be more than one? maybe.. let's keep it 1 for now)
    // currently there should just be movement and rotation
    const output_pointer_array = [0, 1];
    const nodes = [
	{
	    output_pointers: [].push(output_pointer_array[0]),
	    connection_weights: [].push(Math.floor(Math.random() * 2))
        },
	{
	    output_pointers: [].push(output_pointer_array[1]),
	    connection_weights: [].push(Math.random())
	}
    ];
    return nodes;
}


function feedForward() {
    let outputNodeWeights = [];
    const input_nodes = generateInputNodes();

    // input_nodes.forEach((node) => {
    for (const node of input_nodes) {
        // ok this inner for is broken, but i need to go hang out with my wife so i'll come back to this
        for (let i = 0; i <= node.output_pointers.length; i++) {
	    // eventually we will want to multiply the connection_weights by some other weight
	    // input_weight maybe... probably
	    if (node.output_pointers.length <= outputNodeWeights.length) {
		outputNodeWeights[node.output_pointers[i]] += node.connection_weights[i];
	    } else if (outputNodeWeights.length === 0) {
		outputNodeWeights.push(node.connection_weights[i])
	    }
            
        }
    };
    return outputNodeWeights;
}
const outputFeed = feedForward()
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
