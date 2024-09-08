const router = require("express").Router();
const homeBanner = require("../../controllers/homeBanner/homeBanner.controller");
const auth = require("../../middlewares/auth");
const { quintupleUpload } = require("../../middlewares/upload");

router.post("/create", quintupleUpload, homeBanner.createHomeBanner);
router.get("/", homeBanner.getAllHomeBanner);
router.delete("/:id", homeBanner.deleteHomeBanner);
router.patch("/:id",quintupleUpload, homeBanner.updateHomeBanner);

module.exports = router;
