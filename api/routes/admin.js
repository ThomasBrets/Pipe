const express = require('express');
const router = express.Router();
const AdminController = require('../controller/admin')

//USER
router.get("/:userId", AdminController.getUsers)
router.delete("/:userId", AdminController.deleteUsers)
router.put("/:userId", AdminController.promoteAdmins)

//PRODUCT
router.post("/product", AdminController.createProduct)
router.put("/product/:productId", AdminController.editProduct)
router.delete("/product/:productId", AdminController.deleteProduct)

//BASKET
router.get("/basket/history", AdminController.getAllHistory)
router.get("/basket/:historyId", AdminController.getHistoryById)
router.get("/basket/:userId", AdminController.getHistoryByUser)
router.get("/basket/:productId", AdminController.getHistoryByProduct)

//CATEGORY
router.delete("/category/:name", AdminController.deleteCategory)
router.put("/category/:name", AdminController.editCategory)



module.exports = router