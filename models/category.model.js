const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Category = mongoose.model('Category', Schema({
    category: { 
      type: String, 
      required: true 
  },
  blog: [{ 
    type: mongoose.Types.ObjectId,
    ref: 'Blog' 
  }],
  
  }));  

module.exports= Category;