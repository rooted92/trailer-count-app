import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/trailerCountApp');
        console.log('Connected to Database')
    }
    catch {
        console.error('Unable to connect');
    }
};

export default connectDB;