const express = require("express");
const router = express.Router();
const userController= require('../controller/userController')
const usermid = require('../middleware/userMiddleware')


//user api 
 router.post("/register",usermid.urlOfProfileImage, userController.createUser)
 router.post('/login' ,  userController.loginUser);
 router.get('/user/:userId/profile' ,usermid.mid1, userController.getUserProfileById);
router.put('/user/:userId/profile',usermid.mid1, usermid.urlOfProfileImageForUpdate, userController.updateUser);



module.exports = router;