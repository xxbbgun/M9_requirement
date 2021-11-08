const router = require("express").Router()
const {GetCovid,GetWeather} = require("../controller/information.controller");

router.get('/getCovid',GetCovid)
router.get('/getWeather',GetWeather)



module.exports = router
