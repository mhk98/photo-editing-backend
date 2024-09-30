const router = require("express").Router();
const ImageMaskingHowItWorks = require("../../controllers/imageMaskingHowItWorks/imageMaskingHowItWorks");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageMaskingHowItWorks.createImageMaskingHowItWorks);
router.get("/", ImageMaskingHowItWorks.getAllImageMaskingHowItWorks);
router.delete("/:id", ImageMaskingHowItWorks.deleteImageMaskingHowItWorks);
router.patch("/:id",singleUpload, ImageMaskingHowItWorks.updateImageMaskingHowItWorks);

module.exports = router;
