const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const comment = new Schema({
	Name: String,
	Message: String,
	Date: String,
});

const Comment = mongoose.model("comments", comment);

module.exports = Comment;
