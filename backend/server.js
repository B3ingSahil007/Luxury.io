require("dotenv").config();
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/mongodb.js');
const connectCloudinary = require("./config/cloudinary.js");
const userRouter = require("./routes/userRoutes.js");

// CORS
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both 5173 and 5174
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