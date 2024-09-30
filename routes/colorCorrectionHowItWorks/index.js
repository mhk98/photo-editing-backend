const router = require("express").Router();
const ColorCorrectionHowItWorks = require("../../controllers/colorCorrectionHowItWorks/colorCorrectionHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ColorCorrectionHowItWorks.createColorCorrectionHowItWorks);
router.get("/", ColorCorrectionHowItWorks.getAllColorCorrectionHowItWorks);
router.delete("/:id", ColorCorrectionHowItWorks.deleteColorCorrectionHowItWorks);
router.patch("/:id",singleUpload, ColorCorrectionHowItWorks.updateColorCorrectionHowItWorks);

module.exports = router;
