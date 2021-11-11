const mongoose = require("../config/database");
const Schema = mongoose.Schema

const admin = require("../src/admin.json");

const user = new Schema({ 
    name: String,
    email: {type: String , unique: true},
    password:String,
    role: String,
    type_account: String,
})

const User = mongoose.model("users", user)

const saveAdmin = async () => {
	if (0 == (await User.find())) await User.insertMany(admin);
	
};
saveAdmin();
module.exports = User