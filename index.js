import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import path from 'path';
import connectDB from './src/js/connectDB.js';

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

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

app.get('/', async (request, response) => {
    const allTrailers = await Trailer.find({});
    console.log(allTrailers)
    response.render('home.ejs', { allTrailers })
})

app.get('/all-trailers', async (request, response) => {
    const allTrailers = await Trailer.find({});
    response.render('allTrailers.ejs', { allTrailers });
});

app.get('/trailer/:id', async (request, response) => {
    const {id} = request.params;
    try {
        const trailerDetails = await Trailer.findById(id);
        response.render('trailer/show.ejs', { trailerDetails });
    } catch(error) {
        console.log(error);
        throw error;
    }
})

app.listen(port, () => {
    console.log('Listening on PORT: 3000');
});