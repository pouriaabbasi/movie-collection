const mongoose = require("mongoose");

const castToObjectId = (id) => {
    const objectId = mongoose.Types.ObjectId(id);
    return objectId;
}

module.exports = {
    castToObjectId
}