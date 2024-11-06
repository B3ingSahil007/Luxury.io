const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    subCategory: {
        type: String,
        require: true
    },
    sizes: {
        type: Array,
        require: true
    },
    bestseller: {
        type: Boolean,
    },
    date: {
        type: Number,
        require: true
    },
})

const productModal = new mongoose.model('Product', productSchema)
module.exports = productModal