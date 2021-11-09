const router = require("express").Router()
const {GetFeed,Search,GetFeedById,AddFeed,UpdateFeed,DeleteFeed} = require("../controller/feed.controller");
const multer = require("multer");

const storage = multer.diskStorage({ 
    destination: function (request, file, callback) {
      callback(null, '.././react-app/public/uploads');
    },
    filename: function (request, file, callback) {
      callback(null,file.originalname);
    },
  });

const upload = multer({ storage: storage,limits: { fieldSize: 1024 * 1024 * 3,},});
console.log(upload)

router.get('/GetFeedById/:id',GetFeedById)
router.get('/GetFeed',GetFeed)
router.get("/Search/:keyword",Search);
router.post("/AddFeed",upload.single('image'),AddFeed);
router.put("/UpdateFeed/:id",upload.single('image'),UpdateFeed);
router.delete("/DeleteFeed/:id",DeleteFeed);


module.exports = router
