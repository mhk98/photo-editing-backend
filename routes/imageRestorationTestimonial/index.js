const router = require("express").Router();
const ImageRestorationTestimonial = require("../../controllers/imageRestorationTestimonial/imageRestorationTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRestorationTestimonial.createImageRestorationTestimonial);
router.get("/", ImageRestorationTestimonial.getAllImageRestorationTestimonial);
router.delete("/:id", ImageRestorationTestimonial.deleteImageRestorationTestimonial);
router.patch("/:id", singleUpload, ImageRestorationTestimonial.updateImageRestorationTestimonial);

module.exports = router;
