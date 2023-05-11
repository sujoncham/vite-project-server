
const express = require("express");
const routerUser = express.Router();
const multer = require("multer");
const { accountDelete, follow, getAllUsers, getProfileById, login, profileImgId, profileImgUpdate, profileUpdate, signup, unfollow } = require("../controllers/user.controller");






const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads/")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
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

const cpUpload = upload.fields([{ name: 'bannerImg' }, { name: 'profileImg' }]);

routerUser.get('/', getAllUsers);
routerUser.post('/signup', signup);
routerUser.post('/login', login);
routerUser.patch('/profileUpdate/:id', profileUpdate);
routerUser.patch('/profileImgUpdate/:id', cpUpload, profileImgUpdate);
routerUser.get('/profileImgId/:img', profileImgId);
routerUser.get('/profile/:id', getProfileById);
routerUser.delete('/profile/deleteAccount/:id', accountDelete);
routerUser.patch('/profile/:id/follow', follow);
routerUser.patch('/profile/:id/unfollow', unfollow);


module.exports = routerUser;