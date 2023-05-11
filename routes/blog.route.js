const express = require('express');
const { createBlog, getAllBlog, getByIdBlog, createManyBlog, updateBlogById } = require('../controllers/blog.controller');
const routerBlog = express.Router();
const multer = require('multer')
const checkAut = require('../utils/auth-check')

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    } 
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});


// Create a new blog post
routerBlog.post('/createBlog', checkAut, upload.single("image"), createBlog);
routerBlog.post('/createManyBlog', upload.single("image"), createManyBlog);
routerBlog.get('/', getAllBlog);
routerBlog.get('/:id', getByIdBlog);
routerBlog.patch('/:id', upload.single("image"), updateBlogById);

module.exports = routerBlog;