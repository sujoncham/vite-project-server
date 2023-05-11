const mongoose = require('mongoose')

const Comment = mongoose.model("Comment", new mongoose.Schema({

    comments: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    blog: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Blog' 
    }],
}))

module.exports= Comment;