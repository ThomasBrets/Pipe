const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require('../controller/auth')


//GET 
router.get("/me", AuthController.findMyUser)
router.get("/logout", AuthController.logoutUser)

//POST 
router.post("/register", AuthController.createUser)
router.post("/login", passport.authenticate("local"), AuthController.loginUser);

module.exports = router