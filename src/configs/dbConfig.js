const mongoose = require("mongoose");
// const dbConnection = "mongodb://localhost:27017/MovieCollection";
const dbConnection = "mongodb+srv://dev:Vc2mHf9y2pIIaw1U@cluster0.7riz9mc.mongodb.net/?retryWrites=true&w=majority";

const initDatabaseConnection = () => {
    mongoose.connect(dbConnection)
        .then(() => console.log('Now connected to MongoDB!'))
        .catch(err => console.error('Something went wrong', err));
}

module.exports = { initDatabaseConnection };

