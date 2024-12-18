const express = require('express')
const { addProduct, singleProduct, listProduct, removeProduct } = require('../controllers/productController')
const { upload } = require('../middleware/multer.js')
const adminMiddleware = require('../middleware/adminMiddleware')

const productRouter = express.Router()

// Route For Adding Product With Multiple Images
productRouter.route("/add").post(adminMiddleware, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }, { name: 'image5', maxCount: 1 }, { name: 'image6', maxCount: 1 }]), addProduct)

// Route For Retrieving Single Product (expects an ID parameter)
productRouter.route("/single").post(adminMiddleware, singleProduct)

// Route For Listing All Products
productRouter.route("/list").get(listProduct)

// Route For Removing Product (expects an ID parameter)
productRouter.route("/remove").post(adminMiddleware, removeProduct)

module.exports = productRouter;
