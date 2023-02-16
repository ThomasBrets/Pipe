const express = require('express');
const router = express.Router();

const { checkAuth, checkAuthAdmin } = require('../middlewares/auth')

const products = require('./products')
const users = require('./users')
const admin = require('./admin')
const auth = require('./auth')

router.use("/auth", auth)
router.use("/products", products)
router.use("/users", checkAuth, users)
router.use("/admin",checkAuthAdmin, admin)



module.exports = router 