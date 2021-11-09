const mongoose = require("../config/database");
const Schema = mongoose.Schema

const user = new Schema({ 
    name: String,
    email: {type: String , unique: true},
    password:String,
    // role: String,
})

const User = mongoose.model("users", user)

module.exports = User