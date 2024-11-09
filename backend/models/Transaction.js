const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment',
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['In Use', 'Returned', 'In Service', 'Calibrating'],
        default: 'In Use'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);