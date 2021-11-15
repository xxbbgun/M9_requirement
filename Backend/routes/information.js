const router = require("express").Router()
const {GetCovid,GetWeather,GetGold} = require("../controller/information.controller");

router.get('/getCovid',GetCovid)
router.get('/getWeather',GetWeather)
router.get('/getGold',GetGold)



module.exports = router
