const router = require("express").Router();
const ImageMaskingTestimonial = require("../../controllers/imageMaskingTestimonial/imageMaskingTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageMaskingTestimonial.createImageMaskingTestimonial);
router.get("/", ImageMaskingTestimonial.getAllImageMaskingTestimonial);
router.delete("/:id", ImageMaskingTestimonial.deleteImageMaskingTestimonial);
router.patch("/:id", singleUpload, ImageMaskingTestimonial.updateImageMaskingTestimonial);

module.exports = router;
