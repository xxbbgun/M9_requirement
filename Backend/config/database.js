const mongoose = require("mongoose");

mongoose.connect(
	// "mongodb://localhost:27017/RealTimeFeed",
	"mongodb://m9Project:m9Project@cluster0-shard-00-00.ftihs.mongodb.net:27017,cluster0-shard-00-01.ftihs.mongodb.net:27017,cluster0-shard-00-02.ftihs.mongodb.net:27017/RealTimeFeed?ssl=true&replicaSet=atlas-5920i5-shard-0&authSource=admin&retryWrites=true&w=majority",
	{ useNewUrlParser: true },
);

module.exports = mongoose
