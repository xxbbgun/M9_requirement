const router = require("express").Router()
const {register,signin} = require("../controller/login.controller");

router.post("/sign-up",register);
router.post("/sign-in",signin);


module.exports = router
