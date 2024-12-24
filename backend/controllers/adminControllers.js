const AllUsers = require('../models/userModal')

const getAllUsers = async (req, res) => {
    try {
        //^ To Get All Users Data
        // const users = await AllUsers.find()

        //^ To Get All Users Data Except Password Or Any
        const users = await AllUsers.find({}, { password: 0, hashpassword: 0 })
        console.log(users);

        if (!users || !users.length === 0) {
            return res.status(404).json({ msg: "Users Not Found" })
        }

        return res.status(200).json(users)
    } catch (error) {
        console.log(`Admin All Users : ${error}`);
        // next(error)
    }
}

module.exports = {
    getAllUsers
}