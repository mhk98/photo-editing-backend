const router = require("express").Router();
const homeSlider = require("../../controllers/homeSlider/homeSlider.controller");
const auth = require("../../middlewares/auth");
const { quintupleUpload } = require("../../middlewares/upload");

router.post("/create", quintupleUpload, homeSlider.createHomeSlider);
router.get("/", homeSlider.getAllHomeSlider);
router.delete("/:id", homeSlider.deleteHomeSlider);
router.patch("/:id", quintupleUpload, homeSlider.updateHomeSlider);

module.exports = router;
