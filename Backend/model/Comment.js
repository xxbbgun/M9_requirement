const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const comment = new Schema(
  {
    Name: String,
    Message: String,
    FeedId: String,
    DateTime: String,
  },
  { timeStamps: true }
);

const Comment = mongoose.model("comments", comment);

module.exports = Comment;
