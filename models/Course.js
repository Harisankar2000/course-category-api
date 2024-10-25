const mongoose = require('mongoose');

// Course Schema
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
