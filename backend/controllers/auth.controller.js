const userSchema = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const user = new userSchema(req.body);
        await user.save();

        const payload = {
            fullName: user.fullName,
            email: user.email,
            uid: _id
        }

        const token = jwt.sign(payload, process.env.AUTH_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            success: true,
            token: token
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email });

    if (!user)
        return res.status(400).json({
            success: false,
            message: 'User doesnot exist...'
        });

    const isMatched = await bcrypt(password, user.password);

    if (!isMatched)
        return res.status(401).json({
            success: false,
            message: 'Invalid Password, Please Try Again...'
        });

    const payload = {
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        uid: user._id
    }

    const secret = (user.role === 'admin' ? process.env.ADMIN_SECRET : process.env.AUTH_SECRET);
    const token= jwt.sign(payload, secret, { expiresIn: '7d' });

    res.status(200).json({
        success: true,
        token: token
    });
}

const forgotPassword = (req, res) => {
    const data = req.body
    res.status(200).json({
        success: true,
        Data: data,
        message: 'Forgot Password Updated...'
    });
}

const updatePassword = (req, res) => {
    const data = req.body
    res.status(200).json({
        success: true,
        Data: data,
        message: 'Password Updated...'
    });
}

const fetchUsers = async (req, res) => {
    try {
        const users = await UserSchema.find({}, { password: 0, role: 0 })
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    signup,
    login,
    forgotPassword,
    fetchUsers,
    updatePassword
}