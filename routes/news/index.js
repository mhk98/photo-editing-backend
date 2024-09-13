const router = require("express").Router();
const news = require("../../controllers/news/news.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, news.createNews);
router.get("/", news.getAllNews);
router.delete("/:id", news.deleteNews);
router.patch("/:id", singleUpload, news.updateNews);

module.exports = router;
