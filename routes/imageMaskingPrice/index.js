const router = require("express").Router();
const ImageMaskingPrice = require("../../controllers/imageMaskingPrice/imageMaskingPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageMaskingPrice.createImageMaskingPrice);
router.get("/", ImageMaskingPrice.getAllImageMaskingPrice);
router.delete("/:id", ImageMaskingPrice.deleteImageMaskingPrice);
router.patch("/:id", singleUpload, ImageMaskingPrice.updateImageMaskingPrice);

module.exports = router;
