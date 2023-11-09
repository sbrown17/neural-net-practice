export default class Creature {
  constructor(input_nodes, x, y) {
    this.position = new p5.Vector(x, y);
    this.velocity = outputWeights[0];
    this.r = outputWeights[1];
    this.m = r * 0.1;
    this.input_nodes = input_nodes;
  }
  
  update() {
    this.position.add(this.velocity);
  }
  
  feedForward(input_nodes) {
        let outputNodeWeights;
        forEach.input_nodes(node => {
            
            for (let i = 0; i < node.output_pointers.length; i++){
                outputNodeWeights[node.output_pointers[i]] += connection_weight[i];
            }
       });
       return outputNodeWeights;
    }
}
