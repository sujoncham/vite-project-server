const Blog = require('../models/blog.model');
const Category = require('../models/category.model');

exports.createBlog = async (req, res) => {
    // console.log(req.body)
    const {filename} = req.file;
    try {
        const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        image: filename,
      });
      await blog.save();
      res.status(201).json({
        status : "success", 
        message: "Blog created successfully",
        data: blog,
      });
    } catch (err) {
      res.status(400).json({ 
        status : "Failed", 
        message: err.message 
      });
    }
  }
  exports.createManyBlog = async (req, res) => {
    console.log(req.body)
    try {
        const blog = await Blog.insertMany(req.body);
        res.status(201).json({
          status : "success", 
          message: "Blog created successfully",
          data: blog,
        });
    } catch (err) {
      res.status(400).json({ 
        status : "Failed", 
        message: err.message 
      });
    }
  }

  exports.getAllBlog =async (req, res) => {
    try {
      const blog = await Blog.find();
      res.status(201).json(blog);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  exports.getByIdBlog =async (req, res) => {
    const blogId = req.params.id;
    try {
      const blog = await Blog.findById(blogId)
      res.status(201).json(blog);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  exports.updateBlogById = async(req, res, next)=>{
    const {filename} = req.file;
    const {title, description, category} = req.body;
    try {
        const blogId = req.params.id;
        
        const blog = await Blog.findByIdAndUpdate(blogId, {
          title,
          description,
          category,
          image: filename,
        });

        return res.status(200).json({
            status: "success",
            message: "update by id successfully",
            data: blog,
        })
    } catch (error) {
        console.log(error)
    }
};
