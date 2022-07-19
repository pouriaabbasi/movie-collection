const authService = require("../services/authService");


const login = async (req, res, next) => {
    try {
        const jwt = await authService.login(req.body);
        res
            .status(200)
            .json(jwt);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

module.exports = {
    login
}