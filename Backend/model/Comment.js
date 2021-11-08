const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const Comments = require("../src/comment.json");

const comment = new Schema({
	Name: String,
	Message: String,
	FeedId: String,
	DateTime: String
},{timeStamps: true});

const Comment = mongoose.model("comments", comment);

const saveComment = async () => {
	if (0 == (await Comment.find())) await Comment.insertMany(Comments);
	
};
saveComment();

module.exports = Comment;
