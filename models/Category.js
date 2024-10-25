const mongoose = require('mongoose');

// Category Schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
