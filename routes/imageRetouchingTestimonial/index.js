const router = require("express").Router();
const ImageRetouchingTestimonial = require("../../controllers/imageRetouchingTestimonial/imageRetouchingTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRetouchingTestimonial.createImageRetouchingTestimonial);
router.get("/", ImageRetouchingTestimonial.getAllImageRetouchingTestimonial);
router.delete("/:id", ImageRetouchingTestimonial.deleteImageRetouchingTestimonial);
router.patch("/:id", singleUpload, ImageRetouchingTestimonial.updateImageRetouchingTestimonial);

module.exports = router;
