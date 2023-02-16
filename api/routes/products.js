const express = require('express');
const router = express.Router();
const ProductsController = require("../controller/products")

//PRODUCT
router.get("/", ProductsController.getAllProducts)
router.get("/:productId", ProductsController.getProductById)
router.get("/category/:name", ProductsController.getProductByCategoryName)
router.get("/title/:name", ProductsController.getProductByTitleName)

//REVIEW
router.post("/:productId/review", ProductsController.postReview)

module.exports = router