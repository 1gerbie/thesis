const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

// Get all equipment
router.get('/', async (req, res) => {
    try {
        const equipment = await Equipment.find();
        res.json(equipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new equipment
router.post('/', async (req, res) => {
    const equipment = new Equipment(req.body);
    try {
        const newEquipment = await equipment.save();
        res.status(201).json(newEquipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update equipment
router.put('/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(equipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete equipment
router.delete('/:id', async (req, res) => {
    try {
        await Equipment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Equipment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;