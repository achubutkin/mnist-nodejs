'use strict';

const express = require('express');
const path = require('path');
const api = require('./lib/api');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/', express.static(path.join(__dirname, '../client')));

app.use('/api', api);

app.listen(PORT, () => console.log(`ML Server has started at port http://localhost:${PORT}`));
