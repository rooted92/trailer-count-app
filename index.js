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

const addOneTrailer = async () => {
    const newTrailer = await Trailer.create({
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: 304,
        loaded: true,
        fuelLevel: 100,
    });
    // newTrailer.save();
}

// addOneTrailer();

// {
//     "_id": {
//       "$oid": "677ed4e91335c5dd6d67cb94"
//     },
//     "type": "Tanker",
//     "cleanlinessStatus": "Dirty",
//     "trailerNumber": 602,
//     "loaded": false,
//     "fuelLevel": 40,
//     "__v": 0
//   }

// const addNewTrailers = async () => {
//     try{
//         const insertedTrailers = await Trailer.insertMany(trailers);
//         console.log('Trailers inserted successfully:', insertedTrailers);
//     } catch(err) {
//         console.log('Error inserting trailers:', err.message);
//     }
// }

// addNewTrailers();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (request, response) => {
    const allTrailers = await Trailer.find({});
    console.log(allTrailers)
    response.render('home.ejs', { allTrailers })
})

app.get('/trailer/:id', async (request, response) => {
    const {id} = request.params;
    try {
        const foundTrailer = await Trailer.findById(id);
        console.log(foundTrailer);
    } catch(error) {
        console.log(error);
        throw error;
    }
    response.render('trailer/show.ejs', { foundTrailer });
    console.log(id);
})

app.listen(port, () => {
    console.log('Listening on PORT: 3000');
});