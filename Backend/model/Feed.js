const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const Feeds = require("../src/feed.json");

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

const saveFeed = async () => {
	if (0 == (await Feed.find())) await Feed.insertMany(Feeds);
	
};
saveFeed();

module.exports = Feed;
