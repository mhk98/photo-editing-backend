const router = require("express").Router();
const homeSlider = require("../../controllers/homeSlider/homeSlider.controller");
const auth = require("../../middlewares/auth");
const {  twelveUpload } = require("../../middlewares/upload");

router.post("/create", twelveUpload, homeSlider.createHomeSlider);
router.get("/", homeSlider.getAllHomeSlider);
router.delete("/:id", homeSlider.deleteHomeSlider);
router.patch("/:id", twelveUpload, homeSlider.updateHomeSlider);

module.exports = router;
