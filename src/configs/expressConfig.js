const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const setRoute = (routeUrl, router, middleware) => {
    if (middleware)
        app.use(routeUrl, middleware, router);
    else
        app.use(routeUrl, router);
}

const initExpress = () => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`API is listening on port ${PORT}`);
    });
}

module.exports = { initExpress, setRoute };