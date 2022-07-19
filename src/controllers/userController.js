const userService = require("../services/userService");

const getAllUsers = async (req, res, next) => {
    try {
        users = await userService.getAllUsers();
        res
            .status(200)
            .json(users);
    } catch (error) {
        res
            .status(500)
            .json(error);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await userService.getUser(req.params.id);
        res
            .status(200)
            .json(user);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

const addNewUser = async (req, res, next) => {
    try {
        const user = await userService.addNewUser(req.body);
        res
            .status(201)
            .json(user);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res
            .status(201)
            .json(user);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        res
            .status(200)
            .json(result);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    addNewUser,
    updateUser,
    deleteUser
}