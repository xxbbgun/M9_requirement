const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const Questions = require("../src/question.json");

const question = new Schema({
	title: String,
    content: String,
	description: String,
	DateTime: String,
	type: String,
	status: String
});

const Question = mongoose.model("questions", question);

const saveQuestion = async () => {
	if (0 == (await Question.find())) await Question.insertMany(Questions);
	
};
saveQuestion();

module.exports = Question;
