const router = require("express").Router()

const feed = require("./feed")
const comments = require("./comment")
const information = require("./information")

router.use("/feed",feed)
router.use("/comment",comments)
router.use("/information",information)


module.exports = router
