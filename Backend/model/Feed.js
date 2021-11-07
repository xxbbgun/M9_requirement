const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const feed = new Schema({
	Title: String,
	Headline: String,
	description: String,
	imageUrl: String,
	DateTime: String,
	type: String,
	status: String
});

const Feed = mongoose.model("feeds", feed);


module.exports = Feed;
