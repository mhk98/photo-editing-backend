const router = require("express").Router();
const ImageMasking = require("../../controllers/imageMasking/imageMasking.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageMasking.createImageMasking);
router.get("/", ImageMasking.getAllImageMasking);
router.delete("/:id", ImageMasking.deleteImageMasking);
router.patch("/:id",singleUpload, ImageMasking.updateImageMasking);

module.exports = router;
