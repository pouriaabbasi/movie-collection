const bcrypt = require("bcryptjs");

const securePassword = async (rawPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);
    return hashedPassword;
}

const comparePassword = async (rawPassword, hashPassword) => {
    const result = await bcrypt.compare(rawPassword, hashPassword);
    return result;
}

module.exports = {
    securePassword,
    comparePassword
};