const express = require('express');
const router = express.Router();
const Maintenance = require('../models/Maintenance');

// Get all maintenance records
router.get('/', async (req, res) => {
    try {
        const maintenanceRecords = await Maintenance.find();
        res.json(maintenanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new maintenance record
router.post('/', async (req, res) => {
    const maintenance = new Maintenance(req.body);
    try {
        const newMaintenance = await maintenance.save();
        res.status(201).json(newMaintenance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update maintenance record
router.put('/:id', async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(maintenance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete maintenance record
router.delete('/:id', async (req, res) => {
    try {
        await Maintenance.findByIdAndDelete(req.params.id);
        res.json({ message: 'Maintenance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;