const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const registerUser = async (data) => {
    const { full_name, email, password, role } = data;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await User.create({
        full_name,
        email,
        password: hashedPassword,
        role
    });
};

const loginUser = async (email, password) => {

    const user = await User.findOne({ where: { email } });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );

    return {
        token,
        user
    };
};

module.exports = {
    registerUser,
    loginUser
};
