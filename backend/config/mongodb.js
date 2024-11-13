const mongoose = require('mongoose')

// const URI = "mongodb+srv://b3ingsahil007:SahilRizzu218925@cluster0.4pkft4a.mongodb.net/luxury.io"
const URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection Successfully Established To Database");
    } catch (err) {
        console.error(err, "Database Connection Failed", err.message);
        process.exit(1)
    }
}

module.exports = connectDB