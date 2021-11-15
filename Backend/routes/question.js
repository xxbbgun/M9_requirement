const router = require("express").Router();
const { GetQuestion, GetQuestionById,DeleteQuestionById,AddQuestion,Category} = require("../controller/question.controller");

router.get('/GetQuestionById/:id', GetQuestionById);
router.get('/GetQuestion', GetQuestion);
router.post('/AddQuestion', AddQuestion);
router.get("/Category/:keyword", Category);
router.delete('/DeleteQuestionById/:id', DeleteQuestionById);


module.exports = router;
