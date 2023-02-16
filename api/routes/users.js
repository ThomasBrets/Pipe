const express = require('express');
const router = express.Router();
const UserController = require('../controller/users')

//USER 
router.put("/:userId", UserController.updateUser)

//BASKET
router.get("/:userId/basket", UserController.getBasket)
router.post("/:userId/basket", UserController.addProductToBasket)
router.post("/:userId/basket/confirm", UserController.confirmBasket)
router.delete("/:userId/basket/:productId", UserController.deleteProductToBasket)
router.put("/:userId/basket/:productId", UserController.updateProductToBasket)

//HISTORY
router.get("/:userId/history", UserController.getHistory)

module.exports = router