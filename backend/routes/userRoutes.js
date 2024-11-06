const express = require('express')
const { loginUser, registerUser, adminLogin } = require('../controllers/userController')

const userRouter = express.Router()

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/admin").post(adminLogin)

module.exports = userRouter;