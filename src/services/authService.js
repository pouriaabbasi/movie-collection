const userModel = require("../models/userModel");
const passwordUtil = require("../utils/passwordUtil");
const jwt = require('jsonwebtoken');

const login = async (model) => {
    const error = await userModel.validateLoginModel(model);
    if (error) {
        throw new Error(error);
    }

    const user = await userModel.User.findOne({ username: model.username });
    if (!user) {
        throw new Error("Username or Password is not correct");
    }

    const isPasswordCorrect = await passwordUtil.comparePassword(model.password, user.password);
    if (!isPasswordCorrect) {
        throw new Error("Username or Password is not correct");
    }

    const claims = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username
    };

    const token = jwt.sign(claims, "movie_collection_apis", { expiresIn: "2h" });

    return token;
}

module.exports = {
    login
};