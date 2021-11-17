const mongoose = require("mongoose");
if(process.env.NODE_ENV==="local"){
	require("dotenv").config({path:'.env.local'})
  }else{
	require("dotenv").config({path:'.env.production'})
  }

mongoose.connect(
	process.env.DATABASE,
	{ useNewUrlParser: true },
);

module.exports = mongoose
