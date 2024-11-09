const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment',
        required: true
    },
    maintenanceType: {
        type: String,
        required: true
    },
    scheduledDate: {
        type: Date,
        required: true
    },
    completedDate: Date,
    status: {
        type: String,
        enum: ['Scheduled', 'In Progress', 'Completed', 'Overdue'],
        default: 'Scheduled'
    },
    technician: String,
    notes: String,
    nextMaintenanceDate: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);