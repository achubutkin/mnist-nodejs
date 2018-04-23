'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const NumberClassifier = require('./number-classifier');

const trainedBrainData = fs.readFileSync(path.join(__dirname, '../../trained-brain.json'));
const api = express.Router();
const classifier = new NumberClassifier(JSON.parse(trainedBrainData));

api.get('/', (req, res) => res.json({ message: 'Hola ML!' }));

api.post('/guess', (req, res) => {
  const { inputs } = req.body;
  const { output, guess } = classifier.predict(inputs);

  res.json({
    output,
    guess,
  })
});

module.exports = api;
