import Trailer from "./models/trailerModel";
import connectDB from "./connectDB";

connectDB();

const sampleTrailers = [
    { trailerType: 'reefer', trailerCondition: 'clean', trailerNumber: 201, loaded: true, fuelLevel: 75, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'reefer', trailerCondition: 'dirty', trailerNumber: 302, loaded: false, fuelLevel: 50, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'reefer', trailerCondition: 'clean', trailerNumber: 403, loaded: true, fuelLevel: 80, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'reefer', trailerCondition: 'dirty', trailerNumber: 204, loaded: false, fuelLevel: 60, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'reefer', trailerCondition: 'clean', trailerNumber: 305, loaded: true, fuelLevel: 90, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'reefer', trailerCondition: 'dirty', trailerNumber: 406, loaded: false, fuelLevel: 40, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'reefer', trailerCondition: 'clean', trailerNumber: 207, loaded: true, fuelLevel: 85, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'reefer', trailerCondition: 'dirty', trailerNumber: 308, loaded: false, fuelLevel: 55, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'reefer', trailerCondition: 'clean', trailerNumber: 409, loaded: true, fuelLevel: 95, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'dryvan', trailerCondition: 'clean', trailerNumber: 4801, loaded: true, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'dryvan', trailerCondition: 'dirty', trailerNumber: 5002, loaded: false, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'dryvan', trailerCondition: 'clean', trailerNumber: 5303, loaded: true, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'dryvan', trailerCondition: 'dirty', trailerNumber: 4804, loaded: false, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'dryvan', trailerCondition: 'clean', trailerNumber: 5005, loaded: true, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'dryvan', trailerCondition: 'dirty', trailerNumber: 5306, loaded: false, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'dryvan', trailerCondition: 'clean', trailerNumber: 4807, loaded: true, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'dryvan', trailerCondition: 'dirty', trailerNumber: 5008, loaded: false, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'dryvan', trailerCondition: 'clean', trailerNumber: 5309, loaded: true, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'tanker', trailerCondition: 'clean', trailerNumber: 601, loaded: true, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'tanker', trailerCondition: 'dirty', trailerNumber: 702, loaded: false, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'tanker', trailerCondition: 'clean', trailerNumber: 803, loaded: true, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'tanker', trailerCondition: 'dirty', trailerNumber: 604, loaded: false, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'tanker', trailerCondition: 'clean', trailerNumber: 705, loaded: true, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'tanker', trailerCondition: 'dirty', trailerNumber: 806, loaded: false, currentLocation: 'Skikos American Canyon Yard' },
    { trailerType: 'tanker', trailerCondition: 'clean', trailerNumber: 607, loaded: true, currentLocation: 'Skikos Santa Rosa Yard' },
    { trailerType: 'tanker', trailerCondition: 'dirty', trailerNumber: 708, loaded: false, currentLocation: 'Skikos Dirt Yard' },
    { trailerType: 'tanker', trailerCondition: 'clean', trailerNumber: 809, loaded: true, currentLocation: 'Skikos American Canyon Yard' },
];

const seedDB = async () => {
    await Trailer.deleteMany({});
    await Trailer.insertMany(sampleTrailers);
    console.log('Database Seeded');
};