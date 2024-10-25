const mongoose = require('mongoose');

//Category Schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;

//SubCategory Schema
const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
module.exports = SubCategory;

//course Schema
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
