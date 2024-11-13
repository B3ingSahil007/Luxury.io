const jwt = require('jsonwebtoken');

const adminMiddleware = async (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            console.log("You Are Not Admin, Login As User");
            return res.status(403).json({ success: false, message: "Access Denied. Only The Website Creator Has Admin Access. Please Login As A User." })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Not Authorized, Login Again !!" })
        }
        next();
    } catch (error) {
        console.error("Token Verification Error:", error);
        res.json({ success: false, message: "Internal Server Error During Token Verification." })
    }

}

module.exports = adminMiddleware