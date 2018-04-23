'use strict';

const fs = require('fs');
const { Trainer } = require('synaptic');
const NumberClassifier = require('./server/lib/number-classifier');

const classifier = new NumberClassifier();
const fileName = 'trained-brain.json';
const trainOptions = {
  rate: .1,
  iterations: 10,
  shuffle: true,
  log: true,
  cost: Trainer.cost.CROSS_ENTROPY
};

classifier.trainWithSet(classifier.generateSet(5000).training, trainOptions);

const trainedBrain = JSON.stringify(classifier.getTrainedNetwork());
fs.writeFile(fileName, trainedBrain, (error) => {
  if (error) {
    console.error('FAAAILED!!!', error);
  }

  console.log('Brain stored!');
})
