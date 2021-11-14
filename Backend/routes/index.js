const router = require("express").Router()

const feed = require("./feed")
const comments = require("./comment")
const information = require("./information")
const login = require("./login")
const question = require("./question")


router.use("/feed",feed)
router.use("/comment",comments)
router.use("/information",information)
router.use("/user",login)
router.use("/question", question)


module.exports = router
