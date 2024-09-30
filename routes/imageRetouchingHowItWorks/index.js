const router = require("express").Router();
const ImageRetouchingHowItWorks = require("../../controllers/imageRetouchingHowItWorks/imageRetouchingHowItWorks");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRetouchingHowItWorks.createImageRetouchingHowItWorks);
router.get("/", ImageRetouchingHowItWorks.getAllImageRetouchingHowItWorks);
router.delete("/:id", ImageRetouchingHowItWorks.deleteImageRetouchingHowItWorks);
router.patch("/:id",singleUpload, ImageRetouchingHowItWorks.updateImageRetouchingHowItWorks);

module.exports = router;
