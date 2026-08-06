const authService = require("../services/auth.service");

const register = async (req, res) => {
    try {

        const user = await authService.registerUser(req.body);

        const { password, ...userData } = user.toJSON();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: userData
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }
};

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await authService.loginUser(email, password);

        const { password: pwd, ...userData } = result.user.toJSON();

        res.json({
            success: true,
            token: result.token,
            user: userData
        });

    } catch (err) {

        res.status(401).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    register,
    login
};
