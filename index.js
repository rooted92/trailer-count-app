import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import connectDB from './src/js/connectDB.js';
import Trailer from './models/trailerModel.js';

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

connectDB();

app.get('/', async (request, response) => {
    response.render('home.ejs');
})

app.get('/trailers', async (request, response) => {
    const allTrailers = await Trailer.find({});
    response.render('allTrailers.ejs', { allTrailers });
});

app.get('/trailer/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const trailerDetails = await Trailer.findById(id);
        console.log(trailerDetails);
        response.render('trailer/show.ejs', { trailerDetails });
    } catch (error) {
        console.log(error);
        throw error;
    }
})

app.get('/submit-trailer-count', (request, response) => {
    response.render('trailer/submit.ejs');
});

app.post('/api/trailers', async (request, response) => {
    try {
        const { trailers } = request.body;
        if (!Array.isArray(trailers) || trailers.length === 0) {
            return response.status(400).json({ message: 'No trailers provided' });
        }

        const trailerNumbers = trailers.map(trailer => trailer.number);
        const existingTrailers = await Trailer.find({ number: { $in: trailerNumbers } });

        const existingTrailersNumbers = existingTrailers.map(trailer => trailer.number);

        const newTrailers = trailers.filter(trailer => !existingTrailersNumbers.includes(trailer.number));

        if (newTrailers.length > 0) {
            await Trailer.insertMany(newTrailers);
        }

        const trailerCount = trailers;
        // Data that will be sent to email or text
        console.log('Trailer Count to dispatch:', trailerCount);

        response.status(201).json({
            message: 'Trailers submitted successfully',
            newTrailersAdded: newTrailers.length,
            existingTrailers: existingTrailers.length,
            trailerCount,
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: 'Failed to process Trailer Count' });
    }
});

app.get('/success', (request, response) => {
    response.render('success.ejs');
});

app.listen(port, () => {
    console.log('Listening on PORT: 3000');
}); 