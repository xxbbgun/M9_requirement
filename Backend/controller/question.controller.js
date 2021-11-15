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
  DeleteQuestionById: async (req, res, next) => {
    try{
      const { id } = req.params;
      await Question.findByIdAndDelete(id);
      return res.status(200).json(await Question.find());

    }catch(error){

    }
  },
  AddQuestion: async (req, res, next) => {
    try {
      const { Title, description, dates, type,content} = req.body
      const data = {
        title: Title,
        content: content,
        description: description,
        DateTime: dates,
        type: type,
        status: 'ใหม่',
      };
      let question = new Question(data);
      await question.save(async (err, data) => {
        if (err) return res.status(400).json("Bad Request");
        return  res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  Category: async (req, res, next) => {
    try {
      const { keyword } = req.params;
      let data = await Question.find();
      if(keyword === 'Category'){
        return res.status(200).json(data);
      }
      let find = data.filter((p) => p.type === keyword);
      
      return res.status(200).json(find);
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  
};
