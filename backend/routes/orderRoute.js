const express = require('express')
const { placeOrder, placeOrderApple, placeOrderGoogle, placeOrderAmazon, placeOrderPaytm, placeOrderPaypal, placeOrderMaster, placeOrderVisa, placeOrderDiscover, allOrders, userOrders, updateOrderStatus } = require('../controllers/orderControllers.js')
const adminMiddleware = require('../middleware/adminMiddleware.js')
const authUser = require('../middleware/auth.js')

const orderRouter = express.Router();

// Admin Fratures
orderRouter.post('/list', adminMiddleware, allOrders)
orderRouter.post('/status', adminMiddleware, updateOrderStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/apple', authUser, placeOrderApple)
orderRouter.post('/google', authUser, placeOrderGoogle)
orderRouter.post('/amazon', authUser, placeOrderAmazon)
orderRouter.post('/paytm', authUser, placeOrderPaytm)
orderRouter.post('/paypal', authUser, placeOrderPaypal)
orderRouter.post('/master', authUser, placeOrderMaster)
orderRouter.post('/visa', authUser, placeOrderVisa)
orderRouter.post('/discover', authUser, placeOrderDiscover)

// User Features
orderRouter.post('/userOrders', authUser, userOrders)

module.exports = orderRouter;
