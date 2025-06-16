const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    tech: [String],
    github: String,
    demo: String,
    gradient: String,
    border: String
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
