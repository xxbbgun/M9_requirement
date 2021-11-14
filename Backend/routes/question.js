const router = require("express").Router();
const { GetQuestion, GetQuestionById } = require("../controller/question.controller");

router.get('/GetQuestionById/:id', GetQuestionById);
router.get('/GetQuestion', GetQuestion);


module.exports = router;
