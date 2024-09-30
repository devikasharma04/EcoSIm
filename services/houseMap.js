const SENSORS = {
    'sensor-1': {
        name: 'Living Room',
        description: 'Basic sensor in the middle of the living room.',
        groupName: 'Level 1',
        location: {
            x: 31.92,
            y: 11.49,
            z: -12.97
        },
        objectId: 4124
    },
    'sensor-2': {
        name: 'Dining Table',
        description: 'Basic sensor at the dining table.',
        groupName: 'Level 1',
        location: {
            x: -10,
            y: 41.64,
            z: -12.15
        },
        objectId: 4111
    },
    'sensor-3': {
        name: 'Kitchen',
        description: 'Basic sensor in the kitchen.',
        groupName: 'Level 1',
        location: {
            x: 10,
            y: 41.64,
            z: -12.15
        },
        objectId: 4111
    },
    'sensor-4': {
        name: 'Bedroom',
        description: 'Basic sensor in the bedroom.',
        groupName: 'Level 2',
        location: {
            x: -7.46,
            y: 41.47,
            z: 2.97
        },
        objectId: 4085
    }
};

const CHANNELS = {
    'Energy': {
        name: 'Energy',
        description: 'External temperature in kWh.',
        type: 'double',
        unit: '°C',
        min: 0.0,
        max: 15.0
    },
    'Cost': {
        name: 'Cost',
        description: 'Level of carbon dioxide.',
        type: 'double',
        unit: 'ppm',
        min: 10.0,
        max: 50.0
    }
};

async function getSensors() {
    return SENSORS;
}

async function getChannels() {
    return CHANNELS;
}

async function getSamples(timerange, resolution = 32) {
    return {
        count: resolution,
        timestamps: generateTimestamps(timerange.start, timerange.end, resolution),
        data: {
            'sensor-1': {
                'Energy': generateRandomValues(0.0, 15.0, resolution, 1.0),
                'Cost': generateRandomValues(0, 50, resolution, 5.0)
            },
            'sensor-2': {
                'Energy': generateRandomValues(0.0, 15.0, resolution, 1.0),
                'Cost': generateRandomValues(0, 50, resolution, 5.0)
            },
            'sensor-3': {
                'Energy': generateRandomValues(0.0, 15.0, resolution, 1.0),
                'Cost': generateRandomValues(0, 50, resolution, 5.0)
            },
            'sensor-4': {
                'Energy': generateRandomValues(0.0, 15.0, resolution, 1.0),
                'Cost': generateRandomValues(0, 50, resolution, 5.0)
            }
        }
    };
}

function generateTimestamps(start, end, count) {
    const delta = Math.floor((end.getTime() - start.getTime()) / (count - 1));
    const timestamps = [];
    for (let i = 0; i < count; i++) {
        timestamps.push(new Date(start.getTime() + i * delta));
    }
    return timestamps;
}

function generateRandomValues(min, max, count, maxDelta) {
    const values = [];
    let lastValue = min + Math.random() * (max - min);
    for (let i = 0; i < count; i++) {
        values.push(lastValue);
        lastValue += (Math.random() - 0.5) * 2.0 * maxDelta;
        if (lastValue > max) {
            lastValue = max;
        }
        if (lastValue < min) {
            lastValue = min;
        }
    }
    return values;
}

module.exports = {
    getSensors,
    getChannels,
    getSamples
};