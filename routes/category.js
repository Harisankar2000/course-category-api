const express = require('express');
const router = express.Router();
const {
    addCategory,
    editCategory,
    getCategoryById,
    listCategoriesWithSubCounts,
} = require('../controllers/categoryController');

// Add a new category
router.post('/', addCategory);

// Edit an existing category
router.put('/:id', editCategory);

// Get a category by ID
router.get('/:id', getCategoryById);

// List all categories with subcategory counts
router.get('/subcount', listCategoriesWithSubCounts);

module.exports = router;
