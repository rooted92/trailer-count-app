import mongoose from 'mongoose';
import connectDB from './connectDB.js';

await connectDB();

const trailerSchema = new mongoose.Schema({
    type: String,
    cleanlinessStatus: String,
    trailerNumber: Number,
    loaded: Boolean,
    fuelLevel: Number
});

const Trailer = mongoose.model('Trailer', trailerSchema);

// Test Find
const trailers = await Trailer.find({ trailerNumber: 304 });
console.log(trailers);

// Test Update
await Trailer.updateOne({ trailerNumber: 304 }, { cleanlinessStatus: 'Clean' });
console.log('Updated!');

// Test Delete
await Trailer.deleteOne({ trailerNumber: 304 });
console.log('Deleted!');

process.exit(); // Ensure the script exits
