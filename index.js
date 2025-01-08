const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

import { trailers } from './public/services/data.js';
console.log(trailers);
let newTrailerData = [];

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

