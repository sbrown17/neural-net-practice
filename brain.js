export default class Brain {
    constructor(input_nodes, input_weights, hidden_nodes, output_nodes){
        this.input_nodes = input_nodes;
        this.weights = input_weights;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;
    }

    feedForward(input_nodes, output_nodes) {
        let outputNodeWeights;
        forEach.input_nodes(node => {
            
            for (let i = 0; i < node.output_pointers.length; i++){
                outputNodeWeights[node.output_pointers[i]] += connection_weight[i];
            }
       });
       return outputNodeWeights;
    }
}