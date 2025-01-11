import Trailer from './models/trailerModel.js'
import connectDB from './src/js/connectDB.js';

connectDB();

const sampleTrailers = [
    { trailerType: 'reefer', condition: 'clean', number: 201, loaded: true, fuelLevel: 75, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'reefer', condition: 'dirty', number: 302, loaded: false, fuelLevel: 50, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'reefer', condition: 'clean', number: 403, loaded: true, fuelLevel: 80, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'reefer', condition: 'dirty', number: 204, loaded: false, fuelLevel: 60, driverNotes: "Door needs repair", currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'reefer', condition: 'clean', number: 305, loaded: true, fuelLevel: 90, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'reefer', condition: 'dirty', number: 406, loaded: false, fuelLevel: 40, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'reefer', condition: 'clean', number: 207, loaded: true, fuelLevel: 85, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'reefer', condition: 'dirty', number: 308, loaded: false, fuelLevel: 55, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'reefer', condition: 'clean', number: 409, loaded: true, fuelLevel: 95, driverNotes: "Flat tire on rear axle", currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'dryvan', condition: 'clean', number: 4801, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'dryvan', condition: 'dirty', number: 5002, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'dryvan', condition: 'clean', number: 5303, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'dryvan', condition: 'dirty', number: 4804, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'dryvan', condition: 'clean', number: 5005, loaded: true, fuelLevel: null, driverNotes: "Missing mud flap", currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'dryvan', condition: 'dirty', number: 5306, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'dryvan', condition: 'clean', number: 4807, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'dryvan', condition: 'dirty', number: 5008, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'dryvan', condition: 'clean', number: 5309, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'tanker', condition: 'clean', number: 601, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'tanker', condition: 'dirty', number: 702, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'tanker', condition: 'clean', number: 803, loaded: true, fuelLevel: null, driverNotes: "Leaking valve", currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'tanker', condition: 'dirty', number: 604, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'tanker', condition: 'clean', number: 705, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'tanker', condition: 'dirty', number: 806, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'tanker', condition: 'clean', number: 607, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'tanker', condition: 'dirty', number: 708, loaded: false, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'tanker', condition: 'clean', number: 809, loaded: true, fuelLevel: null, driverNotes: null, currentLocation: 'Skikos American Canyon Yard' },
];

const seedDB = async () => {
    await Trailer.deleteMany({});
    await Trailer.insertMany(sampleTrailers);
    console.log('Database Seeded');
};

seedDB();