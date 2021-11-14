const Question = require("../model/Question");

module.exports = {
  GetQuestion: async (req, res, next) => {
    try {
      return res.status(200).json(await Question.find());
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  GetQuestionById: async (req, res, next) => {
    try {
      const { id } = req.params;
      return res.status(200).json(
        await Question.findById(id).catch((err) => {
          if (err) res.status(400).json("Bad Request");
        })
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
};
