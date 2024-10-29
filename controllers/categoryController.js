const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');

// Add a new category
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const isExists = Category.find({name})
        if(isExists){
         return res.json({message: "category name is already exists!"})
        }else{
        const newCategory = new Category({ name });
        
        await newCategory.save();
        res.status(201).json(newCategory);
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Edit an existing category
const editCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get a category by ID
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("before query")
        const category = await Category.findById(id).populate('subCategories');
        console.log("category",category);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// List all categories with subcategory counts
const listCategoriesWithSubCounts = async (req, res) => {
    try {
        const categories = await Category.aggregate([
            {
                $lookup: {
                    from: 'subcategories',
                    localField: '_id',
                    foreignField: 'category', // Field in subcategory that references category
                    as: 'subCategories'
                }
            },
            {
                $project: {
                    name: 1,
                    subCategoryCount: { $size: '$subCategories' }
                }
            }
        ]);

        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    addCategory,
    editCategory,
    getCategoryById,
    listCategoriesWithSubCounts,
};
