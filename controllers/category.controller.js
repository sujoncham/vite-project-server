
const Category = require('../models/category.model');

exports.categoryAdd = async (req, res) => {
    try {
      const category = new Category({
        category: req.body.category,
      });
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

exports.getCategory =async (req, res) => {
    try {
      const category = await Category.find({}).populate('blog');
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }