const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://m9Project:m9Project@cluster0.ftihs.mongodb.net/RealTimeFeed",
	{ useNewUrlParser: true },
);

module.exports = mongoose
