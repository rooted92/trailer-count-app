import express from 'express';
const app = express();
import { fileURLToPath } from 'url';
import path from 'path';
import trailers from './public/services/data.js';
import connectDB from './src/js/connectDB.js';

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

let newTrailerData = [];

const trailerSchema = new mongoose.Schema({
    type: String,
    cleanlinessStatus: String,
    trailerNumber: Number,
    loaded: Boolean,
    fuelLevel: Number
});

const Trailer = mongoose.model('Trailer', trailerSchema);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.render('home.ejs')
})

app.listen(port, () => {
    console.log('Listening on PORT: 3000');
});