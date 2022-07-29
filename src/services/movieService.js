const Movie = require("../models/model/movieModel");
const movieValidation = require("../models/validation/movieValidation");
const axios = require('axios').default;

const getAllMovies = async () => {
    const movies = Movie.find().lean();
    return movies;
}

const search = async (model) => {
    const error = await movieValidation.validateMovieSearchModel(model);
    if (error) {
        throw new Error(error);
    }
    const omdbSearchUrl = "https://omdbapi.com/?apiKey=c651206f&" + generateOmdbSearchUrl(model);
    const response = await axios.get(omdbSearchUrl);
    return response.data;
}

const generateOmdbSearchUrl = (model) => {
    let params = "s=" + model.search;
    if (model.type) {
        params += "&type=" + model.type;
    }
    if (model.year) {
        params += "&y=" + model.year
    }
    if (model.page) {
        params += "&page=" + model.page
    }

    return params;
}

module.exports = {
    getAllMovies,
    search
};