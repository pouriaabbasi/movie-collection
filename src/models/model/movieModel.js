const { Schema, default: mongoose } = require("mongoose");

const movieSchema = new Schema({
    title: { type: String },
    year: { type: Number },
    rated: { type: String },
    released: { type: Date },
    runtime: { type: String },
    genre: { type: String },
    director: { type: String },
    writer: { type: String },
    actors: { type: String },
    plot: { type: String },
    language: { type: String },
    country: { type: String },
    awards: { type: String },
    poster: { type: String },
    ratings: [{
        source: { type: String },
        value: { type: String }
    }],
    metascore: { type: Number },
    imdbRating: { type: Number },
    imdbVotes: { type: String },
    imdbID: { type: String },
    type: { type: String },
    dvd: { type: Date },
    boxOffice: { type: String },
    production: { type: String },
    website: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model("Movie", movieSchema);