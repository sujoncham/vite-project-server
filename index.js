const express = require('express')
const cors = require('cors');
const connectDB = require('./utils/connectDB');
const routerBlog = require('./routes/blog.route');
const routerCategory = require('./routes/category.route');
const routerUser = require('./routes/user.route');

require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

// vite-blog
// 1d0JXMltiU4Iwefp

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static('./uploads'));

connectDB()

app.use('/api/blog', routerBlog)
app.use('/api/category', routerCategory)
app.use('/api/user', routerUser)


app.get('/', (req, res)=>{
    res.send('Hello')
})

app.use((req, res, next)=>{
    res.status(400).send("Request url was not found")
    // next(400).send("Request url was not found")
})

app.use((err, req, res, next)=>{
    if(res.headerSent){
        next("There was a problem")
    } else{
        if(err.message){
            res.send(err.message);
        } else{
            res.send('There is an error!!')
        }
    }
    
})

app.listen(port, ()=>{
    console.log('My server port is,', port)
})