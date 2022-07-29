const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).send("Invalid Token");
    }
    if (!token.startsWith('Bearer ')) {
        return res.status(401).send("Invalid Token");
    }
    try {
        const decode = jwt.verify(token.replace('Bearer ', ''), "movie_collection_apis");
        req.user = decode;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

    return next();
}

module.exports = verifyToken;