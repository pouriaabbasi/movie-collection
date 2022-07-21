const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    username: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);