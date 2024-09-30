const router = require("express").Router();
const ImageRestorationHowItWorks = require("../../controllers/imageRestorationHowItWorks/imageRestorationHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRestorationHowItWorks.createImageRestorationHowItWorks);
router.get("/", ImageRestorationHowItWorks.getAllImageRestorationHowItWorks);
router.delete("/:id", ImageRestorationHowItWorks.deleteImageRestorationHowItWorks);
router.patch("/:id",singleUpload, ImageRestorationHowItWorks.updateImageRestorationHowItWorks);

module.exports = router;
