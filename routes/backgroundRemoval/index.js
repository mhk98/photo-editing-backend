const router = require("express").Router();
const BackgroundRemoval = require("../../controllers/backgroundRemoval/backgroundRemoval.controller");
const auth = require("../../middlewares/auth");
const { doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, BackgroundRemoval.createBackgroundRemoval);
router.get("/", BackgroundRemoval.getAllBackgroundRemoval);
router.delete("/:id", BackgroundRemoval.deleteBackgroundRemoval);
router.patch("/:id",doubleUpload, BackgroundRemoval.updateBackgroundRemoval);

module.exports = router;
