'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const NumberClassifier = require('./number-classifier');

const trainedBrainData = fs.readFileSync(path.join(__dirname, '../../trained-brain.json'));
const api = express.Router();
const classifier = new NumberClassifier(JSON.parse(trainedBrainData));

api.get('/', (req, res) => res.json({ message: 'Hola ML!' }));

api.get('/predict', (req, res) => ({
  message: 'predicting...'
}));

module.exports = api;
