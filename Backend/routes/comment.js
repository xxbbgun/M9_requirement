const router = require("express").Router()
const {GetCommentByFeedId} = require("../controller/comment.controller");

router.get('/commentById/:id',GetCommentByFeedId)



module.exports = router
