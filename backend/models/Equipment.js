const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Under Maintenance', 'Retired'],
        default: 'Active'
    },
    lastCalibration: {
        type: Date
    },
    nextCalibration: {
        type: Date
    },
    location: {
        type: String
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Equipment', equipmentSchema);