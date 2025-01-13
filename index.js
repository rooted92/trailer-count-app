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
    
});

app.listen(port, () => {
    console.log('Listening on PORT: 3000');
}); 