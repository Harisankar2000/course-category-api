const mongoose = require('mongoose');

// SubCategory Schema
const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
module.exports = SubCategory;
