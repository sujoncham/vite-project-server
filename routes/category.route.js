const express = require('express');
const { getCategory, categoryAdd } = require('../controllers/category.controller');
const routerCategory = express.Router();


// Create a new blog post
routerCategory.post('/categoryAdd', categoryAdd);
routerCategory.get('/', getCategory);

module.exports = routerCategory;