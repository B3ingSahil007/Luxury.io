const userModal = require('../models/userModal')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
}

const comparePassword = async (enteredPassword, hashedPassword) => {
    return await bcrypt.compare(enteredPassword, hashedPassword);
};

// Route For User Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        // Checking If User Is Already Registered Or Not
        const userExist = await userModal.findOne({ email })
        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials - User Not Found" })
        }

        // Comparing User Password
        const isPasswordMatch = await comparePassword(password, userExist.hashedPassword)

        if (isPasswordMatch) {
            const token = createToken(userExist._id)
            res.status(200).json({ success: true, data: "User Login Successful", token })
        } else {
            res.status(401).json({ success: false, msg: "Invalid E-Mail Or Password" })
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error !!" })
    }
}

// Route For User Registeration
const registerUser = async (req, res) => {
    try {
        // res.json({ msg: "Registeration API Working" })
        const { firstname, lastname, email, mobileNumber, password, confirmPassword, apartment, street, city, state, zipCode, country } = req.body

        // Checking If User Is Already Registered Or Not
        const userExist = await userModal.findOne({ email })
        if (userExist) {
            console.log("Registered E-Mail Is Already Exists :", email);
            return res.status(400).json({ success: false, message: "Registered E-Mail Is Already Exists" })
        }

        // Validating Email Format & Strong Password
        if (!validator.isEmail(email)) {
            console.log("E-mail Is Not Correct, Please Enter A Valid E-Mail :", email);
            return res.status(400).json({ success: false, message: "E-mail Is Not Correct, Please Enter A Valid E-Mail" })
        }

        if (password.length < 8) {
            console.log("Please Enter Password More Than 8 Characters");
            return res.status(400).json({ success: false, message: "Please Enter Password More Than 8 Characters" })
        }

        // Check if password matches confirmPassword
        if (password !== confirmPassword) {
            console.log("Passwords Do Not Match, Enter Correct Password");
            return res.status(400).json({ success: false, message: "Passwords Do Not Match, Enter Correct Password" });
        }

        // Hash Password Before Saving To Database
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound)


        // Creating User Account & Generate JWT Token
        const userCreated = await userModal.create({ firstname, lastname, email, mobileNumber, password, confirmPassword, hashedPassword, apartment, street, city, state, zipCode, country })
        const token = createToken(userCreated._id)
        res.status(201).json({ success: true, message: "User Created Successfully", userCreated, token })
        // console.log(req.body);

    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error !!" })
    }
}

// Route For Admin Login
const adminLogin = async (req, res) => {
<<<<<<< HEAD

=======
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email And Password Are Required." });
        }

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET_KEY)
            res.json({ success: true, token })
        } else {
            console.error(error);
            res.status(500).send({ success: false, message: "Invalid Credentials. You Are Not Authorized As Admin !!" })
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error !!" })
    }
>>>>>>> 91fd2bf (Ninth Commit)
}

module.exports = { loginUser, registerUser, adminLogin }