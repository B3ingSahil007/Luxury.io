<<<<<<< HEAD
=======
const cloudinary = require("cloudinary").v2;
const productModal = require("../models/productModal");

// Adding Product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const image5 = req.files.image5 && req.files.image5[0]
        const image6 = req.files.image6 && req.files.image6[0]

        const images = [image1, image2, image3, image4, image5, image6].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )

        // console.log(name, description, price, category, subCategory, sizes, bestseller);
        // console.log(imagesUrl);

        const productData = { name, description, price: Number(price), category, subCategory, sizes: JSON.parse(sizes), bestseller: bestseller === "true", image: imagesUrl, date: Date.now() };
        console.log(productData);

        const productCreated = await productModal.create(productData);
        res.status(201).json({ success: true, message: "Product Created Successfully", product: productCreated });

    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error, Adding Product !!" })
    }
}

// Single Product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModal.findById(productId)
        res.status(200).json({ success: true, product })
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error, Getting Single Product !!" })
    }
}

// List Product
const listProduct = async (req, res) => {
    try {
        const products = await productModal.find({})
        res.json({ success: true, products })
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error, List All Products !!" })
    }
}

// Removing Product
const removeProduct = async (req, res) => {
    try {
        const productID = req.body.id
        await productModal.deleteOne({ _id: productID })
        // await productModal.findByIdAndDelete(req.body.id)
        return res.status(200).json({ success: true, message: "Product Deleted Successfully" })
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error, Deleting Products !!" })
    }
}

module.exports = { addProduct, singleProduct, listProduct, removeProduct }
>>>>>>> 91fd2bf (Ninth Commit)
