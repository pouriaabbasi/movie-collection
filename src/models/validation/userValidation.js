const Joi = require("joi");

const insertValidation = Joi.object({
    firstName: Joi.string().max(100).trim().required(),
    lastName: Joi.string().max(100).trim().required(),
    username: Joi.string().max(100).trim().required(),
    password: Joi.string().max(100).trim().required()
});

const updateValidation = Joi.object({
    firstName: Joi.string().max(100).trim().required(),
    lastName: Joi.string().max(100).trim().required(),
    username: Joi.string().max(100).trim().required()
});

const loginValidation = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required()
})

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
    insertValidateUserModel,
    updateValidationUserModel,
    validateLoginModel
}