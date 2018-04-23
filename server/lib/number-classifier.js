'use strict';

const {
  Neuron,
  Layer,
  Network,
  Trainer,
  Architect
} = require('synaptic');
const mnist = require('mnist');


let instance;

class NumberClassifier {
  constructor(trainedBrain) {
    if (!instance) {
      instance = this;
      if (trainedBrain) {
        this.network = Network.fromJSON(trainedBrain);
      } else {
        this.network = new Architect.Perceptron(28 * 28, 20, 10);
      }
      this.trainer = new Trainer(this.network);
    }

    return instance;
  }

  generateSet(trainLength) {
    return mnist.set(trainLength);
  }

  trainWithSet(set) {
    return this.trainer.train(set);
  }

  predict(input) {
    this.network.activate(input);
  }

  getTrainedNetwork() {
    return this.network.toJSON();
  }
}

module.exports = NumberClassifier;
