const router = require("express").Router()
const {register,signin,Google,Facebook} = require("../controller/login.controller");

router.post("/sign-up",register);
router.post("/sign-in",signin);
router.post('/signin/google',Google)
router.post('/signin/facebook',Facebook)


module.exports = router
