const path = require('path');
const connection = require(path.join(__dirname, '../connection'));
const schema = connection.Schema;
const userSchema = new schema({
    'phnumber': { type: Number, required: true, unique: true },
    'password': { type: String, required: true, default: "abcd" },
    'category':{ type: String, required: true, default: "c" }
})
const userModel = connection.model('users', userSchema);
module.exports = userModel;
