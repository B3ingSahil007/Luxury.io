const cloudinary = require("cloudinary").v2;

const connectCloudinary = async () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
        });
        console.log("Connection Successfully Established To Cloudinary");
    } catch (error) {
        console.log("Cloudinary Connection Failed", error);
    }
};

module.exports = connectCloudinary;