const router = require("express").Router();
const BackgroundRemovalHowItWorks = require("../../controllers/backgroundRemovalHowItWorks/backgroundRemovalHowItWorks");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, BackgroundRemovalHowItWorks.createBackgroundRemovalHowItWorks);
router.get("/", BackgroundRemovalHowItWorks.getAllBackgroundRemovalHowItWorks);
router.delete("/:id", BackgroundRemovalHowItWorks.deleteBackgroundRemovalHowItWorks);
router.patch("/:id",singleUpload, BackgroundRemovalHowItWorks.updateBackgroundRemovalHowItWorks);

module.exports = router;
