const movieService = require("../services/movieService");


const getAllMovies = async (req, res, next) => {
    try {
        const movies = await movieService.getAllMovies();
        res
            .status(200)
            .json(movies);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

const search = async (req, res, next)=>{
    try {
        const movies = await movieService.search(req.body);
        res
            .status(200)
            .json(movies);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}

module.exports = {
    getAllMovies,
    search
}