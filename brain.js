export default class Brain {
    constructor(input_nodes, input_weights, hidden_nodes, output_nodes){
        this.input_nodes = input_nodes;
        this.weights = input_weights;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;
    }

    //ninput nodes based off environment
    feedForward(input_nodes, output_nodes) {
       // need to know:
       // input_node {
       //   output_pointers[0..n]
       //   connection_weight[] array of floats from -1.0 to 1.0, same number of weights as connection_pointers
       // }
       // output_nodes => array of floats (all connection strings to it summed)
        let outputNodeWeights;
        forEach.input_nodes(node => {
            
            for (let i = 0; i < node.output_pointers.length; i++){
                outputNodeWeights[node.output_pointers[i]] += connection_weight[i];
            }
       });
       return outputNodeWeights;
    }
}