const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const feed = new Schema({
	name: String,
	description: String,
	price: Number,
	quantity: Number,
	imageUrl: String,
	type: String,
	author: String,
	status: String
});

const Feed = mongoose.model("feeds", feed);


module.exports = Feed;
