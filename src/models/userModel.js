const { Schema, default: mongoose } = require("mongoose");
const joi = require("joi");

const insertValidation = joi.object({
    firstName: joi.string().max(100).trim().required(),
    lastName: joi.string().max(100).trim().required(),
    username: joi.string().max(100).trim().required(),
    password: joi.string().max(100).trim().required()
});
const updateValidation = joi.object({
    firstName: joi.string().max(100).trim().required(),
    lastName: joi.string().max(100).trim().required(),
    username: joi.string().max(100).trim().required()
});
const loginValidation = joi.object({
    username: joi.string().trim().required(),
    password: joi.string().trim().required()
})

const userSchema = new Schema({
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    username: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

const insertValidateUserModel = async (user) => {
    const { error } = insertValidation.validate(user);
    if (error) {
        return error.message;
    }
}

const updateValidationUserModel = async (user) => {
    const { error } = updateValidation.validate(user);
    if (error) {
        return error.message;
    }
}

const validateLoginModel = async (login) => {
    const { error } = loginValidation.validate(login);
    if (error) {
        return error.message;
    }
}

module.exports = {
    User,
    insertValidateUserModel,
    updateValidationUserModel,
    validateLoginModel
};