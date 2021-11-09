const router = require("express").Router()
const {register,signin,Google} = require("../controller/login.controller");

router.post("/sign-up",register);
router.post("/sign-in",signin);
router.post('/signin/google',Google)
  


module.exports = router
