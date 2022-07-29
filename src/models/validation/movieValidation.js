const Joi = require("joi");

const movieSearchValidation = Joi.object({
    search: Joi.string().trim().required(),
    type: Joi.string().trim().valid('movie', 'series', 'episode'),
    year: Joi.number().min(1900).max(2050),
    page: Joi.number().min(1).max(100)
});

const validateMovieSearchModel = async (model) => {
    const { error } = movieSearchValidation.validate(model);
    if (error) {
        return error.message;
    }
}

module.exports = {
    validateMovieSearchModel
}