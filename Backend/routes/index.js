const router = require("express").Router()

const admin = require("./admin")


router.use("/admin",admin)


module.exports = router
