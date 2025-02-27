require('dotenv').config();
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/mongodb.js');
const connectCloudinary = require("./config/cloudinary.js");
const userRouter = require("./routes/userRoutes.js");
const productRouter = require('./routes/productRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const orderRouter = require('./routes/orderRoute.js');

// CORS
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://luxury-io-frontend.vercel.app', 'https://luxury-io-admin.vercel.app'], // Allow both 5173 and 5174
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH, PROPFIND',
    credentials: true
}

// App Configuration
const app = express();
const port = process.env.PORT || 4000;
connectCloudinary()

// Middlewares
app.use(cors(corsOptions));
app.use(express.json())

// API Endpoints
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res) => {
    res.send('API Working . . .')
})

// Starting Express Server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server Is Running On Port : ${port}`)
        console.log('Changes Applied !!')
    })
})
