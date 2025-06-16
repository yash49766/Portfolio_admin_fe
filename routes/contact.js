const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST: Create new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(201).json({ success: true, data: contact });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// GET: Get all messages
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE: Delete a contact by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Message not found' });
        res.json({ message: 'Message deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
