const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const comment = new Schema({
	name: String,
	message: String,
});

const Comment = mongoose.model("comments", comment);

module.exports = Comment;
