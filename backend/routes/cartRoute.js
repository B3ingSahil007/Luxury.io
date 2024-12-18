const express = require('express')
const { addToCart, getUserCart, updateCart } = require('../controllers/cartControllers.js');
const authUser = require('../middleware/auth.js');

const cartRouter = express.Router()

// Route For Getting User Cart
cartRouter.route("/get").post(authUser, getUserCart);

// Route For Adding Product To Cart
cartRouter.route("/add").post(authUser, addToCart);

// Route For Updating Product In Cart
cartRouter.route("/update").post(authUser, updateCart);

module.exports = cartRouter;
