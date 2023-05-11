const mongoose = require('mongoose')

const Blog = new mongoose.model("Blog", mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: [true, "Please, change the title"]
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    category: [{ 
        type: mongoose.Types.ObjectId,
        ref: 'Category' 
      }],
}, {
    timestamps: true
}))



module.exports= Blog;