const { response } = require('express');
const orderModal = require('../models/orderModal');
const userModal = require('../models/userModal');

// Placing Orders Using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = { userId, items, address, amount, paymentMethod: "COD", payment: false, date: Date.now() }
        const newOrder = new orderModal(orderData)
        await newOrder.save()

        await userModal.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: 'Order Placed Successfully' })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Placing Orders Using ApplePay Method
const placeOrderApple = async (req, res) => {

}

// Placing Orders Using GooglePay Method
const placeOrderGoogle = async (req, res) => {

}

// Placing Orders Using AmazonPay Method
const placeOrderAmazon = async (req, res) => {

}

// Placing Orders Using Paytm Method
const placeOrderPaytm = async (req, res) => {

}

// Placing Orders Using PayPal Method
const placeOrderPaypal = async (req, res) => {

}

// Placing Orders Using Master Card Method
const placeOrderMaster = async (req, res) => {

}

// Placing Orders Using Visa Card Method
const placeOrderVisa = async (req, res) => {

}

// Placing Orders Using Discover Card Method
const placeOrderDiscover = async (req, res) => {

}

// All Orders For Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModal.find({})
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// User Orders Data For Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModal.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Update Orders Status Form Admin Panel
const updateOrderStatus = async (req, res) => {

}

module.exports = { placeOrder, placeOrderApple, placeOrderGoogle, placeOrderAmazon, placeOrderPaytm, placeOrderPaypal, placeOrderMaster, placeOrderVisa, placeOrderDiscover, allOrders, userOrders, updateOrderStatus }