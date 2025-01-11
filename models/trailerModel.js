import mongoose from "mongoose";

const trailerSchema = new mongoose.Schema({
    trailerType: {
        type: String,
        required: true,
        loweracse: true,
        enum: ['reefer', 'dryvan', 'tanker']
    },
    trailerCondition: {
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