const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getAllMovies)
router.post("/search", movieController.search)

module.exports = router;