'use strict';

const fs = require('fs');
const NumberClassifier = require('./server/lib/number-classifier');

const classifier = new NumberClassifier();
const fileName = 'trained-brain.json';

classifier.trainWithSet(classifier.generateSet(10000).training);

const trainedBrain = JSON.stringify(classifier.getTrainedNetwork());
fs.writeFile(fileName, trainedBrain, (error) => {
  if (error) {
    console.error('FAAAILED!!!', error);
  }

  console.log('Brain stored!');
})
