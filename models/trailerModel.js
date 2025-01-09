import connectDB from "../src/js/connectDB";
import mongoose from "mongoose";

connectDB();

const trailerSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    cleanlinessStatus: {
        type: String,
        required: true
    },
    trailerNumber: {
        type: Number,
        required: true
    },
    loaded: {
        type: Boolean,
        required: true
    },
    fuelLevel: {
        type: Number,
    }
});

const Trailer = mongoose.model('Trailer', trailerSchema);

export default Trailer;