const mongoose = require("../config/database");
const Schema = mongoose.Schema

const user = new Schema({
    email: {type: String , unique: true},
    password:string,
    name: String,
    role: String,
})

const User = mongoose.model("users", user)

module.exports = User