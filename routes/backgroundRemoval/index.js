const router = require("express").Router();
const BackgroundRemoval = require("../../controllers/backgroundRemoval/backgroundRemoval.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, BackgroundRemoval.createBackgroundRemoval);
router.get("/", BackgroundRemoval.getAllBackgroundRemoval);
router.delete("/:id", BackgroundRemoval.deleteBackgroundRemoval);
router.patch("/:id",singleUpload, BackgroundRemoval.updateBackgroundRemoval);

module.exports = router;
