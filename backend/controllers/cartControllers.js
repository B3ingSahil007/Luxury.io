const userModal = require("../models/userModal");

// Add To Cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body
        const userData = await userModal.findById(userId)
        let cartData = await userData.cartData || {}

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        if (cartData[itemId][size] <= 0) {
            delete cartData[itemId][size];
        }
        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
        }

        await userModal.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: 'Added to Cart' })

    } catch (error) {
        console.error("Error While Adding Product To Cart :", error);
        res.json({ success: false, message: "Internal Server Error. Failed To Add Product To Cart." + error.message });
    }
};

// Update Cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await userModal.findById(userId);
        let cartData = await userData.cartData || {};

        if (quantity > 0) {
            cartData[itemId] = cartData[itemId] || {};
            cartData[itemId][size] = quantity;
        } else {
            // Remove size if quantity is zero
            if (cartData[itemId]) {
                delete cartData[itemId][size];
                // Remove itemId if no sizes exist
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        }

        await userModal.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: 'Cart Updated' })

    } catch (error) {
        console.error("Error While Updating The Cart :", error);
        res.json({ success: false, message: "Internal Server Error. Failed To Update Cart." + error.message });
    }
};

// Get User Cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModal.findById(userId);
        let cartData = await userData.cartData || {};

        res.json({ success: true, cartData })

    } catch (error) {
        console.error("Error While Retrieving The User's Cart :", error);
        res.json({ success: false, message: "Internal Server Error. Failed To Retrieve User's Cart." + error.message });
    }
};

module.exports = { addToCart, updateCart, getUserCart }
