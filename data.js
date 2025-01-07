const {v4: uuid} = require('uuid');

let trailers = [
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '304',
        loaded: true,
        fuelLevel: 100,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '4801',
        loaded: false,
        fuelLevel: 75,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '501',
        loaded: true,
        fuelLevel: 50,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '305',
        loaded: false,
        fuelLevel: 80,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '5002',
        loaded: true,
        fuelLevel: 60,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '602',
        loaded: false,
        fuelLevel: 40,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '306',
        loaded: true,
        fuelLevel: 90,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '5351',
        loaded: false,
        fuelLevel: 30,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '503',
        loaded: true,
        fuelLevel: 70,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '307',
        loaded: false,
        fuelLevel: 85,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '4803',
        loaded: true,
        fuelLevel: 65,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '604',
        loaded: false,
        fuelLevel: 45,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '308',
        loaded: true,
        fuelLevel: 95,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '5004',
        loaded: false,
        fuelLevel: 35,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '505',
        loaded: true,
        fuelLevel: 55,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '309',
        loaded: false,
        fuelLevel: 75,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '5352',
        loaded: true,
        fuelLevel: 85,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '606',
        loaded: false,
        fuelLevel: 25,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '310',
        loaded: true,
        fuelLevel: 65,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '4805',
        loaded: false,
        fuelLevel: 45,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '507',
        loaded: true,
        fuelLevel: 35,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '311',
        loaded: false,
        fuelLevel: 55,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '5006',
        loaded: true,
        fuelLevel: 75,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '608',
        loaded: false,
        fuelLevel: 95,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '312',
        loaded: true,
        fuelLevel: 85,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '5353',
        loaded: false,
        fuelLevel: 65,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '509',
        loaded: true,
        fuelLevel: 45,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '313',
        loaded: false,
        fuelLevel: 25,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '4807',
        loaded: true,
        fuelLevel: 55,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '610',
        loaded: false,
        fuelLevel: 75,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '314',
        loaded: true,
        fuelLevel: 95,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '5008',
        loaded: false,
        fuelLevel: 85,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '511',
        loaded: true,
        fuelLevel: 65,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '315',
        loaded: false,
        fuelLevel: 45,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '5354',
        loaded: true,
        fuelLevel: 25,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '612',
        loaded: false,
        fuelLevel: 55,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '316',
        loaded: true,
        fuelLevel: 75,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '4809',
        loaded: false,
        fuelLevel: 95,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '513',
        loaded: true,
        fuelLevel: 85,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '317',
        loaded: false,
        fuelLevel: 65,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '5010',
        loaded: true,
        fuelLevel: 45,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '614',
        loaded: false,
        fuelLevel: 25,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Clean',
        trailerNumber: '318',
        loaded: true,
        fuelLevel: 55,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '5355',
        loaded: false,
        fuelLevel: 75,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Clean',
        trailerNumber: '515',
        loaded: true,
        fuelLevel: 95,
    },
    {
        id: uuid(),
        type: 'Reefer',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '319',
        loaded: false,
        fuelLevel: 85,
    },
    {
        id: uuid(),
        type: 'Dryvan',
        cleanlinessStatus: 'Clean',
        trailerNumber: '4811',
        loaded: true,
        fuelLevel: 65,
    },
    {
        id: uuid(),
        type: 'Tanker',
        cleanlinessStatus: 'Dirty',
        trailerNumber: '616',
        loaded: false,
        fuelLevel: 45,
    }
];

export default trailers;