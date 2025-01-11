import mongoose from "mongoose";

const trailerSchema = new mongoose.Schema({
    trailerType: {
        type: String,
        required: true,
        loweracse: true,
        enum: ['reefer', 'dryvan', 'tanker']
    },
    condition: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    loaded: {
        type: Boolean,
        required: true
    },
    fuelLevel: {
        type: Number,
    },
    driverNotes: {
        type: String
    },
    currentLocation: {
        type: String,
    }
});

const Trailer = mongoose.model('Trailer', trailerSchema);

export default Trailer;