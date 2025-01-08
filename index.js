import express from 'express';
const app = express();
import { fileURLToPath } from 'url';
import path from 'path';
import trailers from './public/services/data.js';

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let newTrailerData = [];

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log('Listening on PORT: 3000');
});