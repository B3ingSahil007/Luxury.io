const express = require('express')
const { loginUser, registerUser, adminLogin } = require('../controllers/userController')
const { getAllUsers, getSingleUser } = require('../controllers/adminControllers')

const userRouter = express.Router()

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/admin").post(adminLogin)
userRouter.route("/allusers").get(getAllUsers)

module.exports = userRouter;