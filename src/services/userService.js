const User = require("../models/model/userModel");
const userValidate = require("../models/validation/userValidation");
const passwordUtil = require("../utils/passwordUtil");
const typeUtil = require("../utils/typeUtil");

const getAllUsers = async () => {
    const users = await User.find().lean().select('-password');
    return users;
}

const getUser = async (id) => {
    const objectId = typeUtil.castToObjectId(id);
    const user = User.findById(objectId).lean().select("-password");
    return user;
}

const addNewUser = async (model) => {
    const error = await userValidate.insertValidateUserModel(model);
    if (error) {
        throw new Error(error);
    }

    const user = await createUserModelFromRequestBody(model);

    user.save();

    return user;
}

const updateUser = async (id, model) => {
    const error = await userValidate.updateValidationUserModel(model);
    if (error) {
        throw new Error(error);
    }

    const user = await createUserModelFromRequestBody(model);

    const objectId = typeUtil.castToObjectId(id);
    return await User.findByIdAndUpdate(objectId, user, { returnOriginal: false }).select("-password");
}

const deleteUser = async (id) => {
    const objectId = typeUtil.castToObjectId(id);
    await User.deleteOne({ _id: objectId });
    return true;
}

const createUserModelFromRequestBody = async (model) => {
    return new User({
        firstName: model.firstName,
        lastName: model.lastName,
        username: model.username,
        password: await passwordUtil.securePassword(model.password)
    });
}

module.exports = {
    getAllUsers,
    addNewUser,
    getUser,
    updateUser,
    deleteUser
};