const router = require("express").Router();
const BackgroundRemovalPrice = require("../../controllers/backgroundRemovalPrice/backgroundRemovalPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, BackgroundRemovalPrice.createBackgroundRemovalPrice);
router.get("/", BackgroundRemovalPrice.getAllBackgroundRemovalPrice);
router.delete("/:id", BackgroundRemovalPrice.deleteBackgroundRemovalPrice);
router.patch("/:id", singleUpload, BackgroundRemovalPrice.updateBackgroundRemovalPrice);

module.exports = router;
