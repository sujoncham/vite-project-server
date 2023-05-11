
const mongoose = require('mongoose');
require('dotenv').config()

const URL = `mongodb+srv://vite-blog:1d0JXMltiU4Iwefp@cluster0.rsjatur.mongodb.net/vite-project?retryWrites=true&w=majority`
const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
  };

  module.exports = connectDB;