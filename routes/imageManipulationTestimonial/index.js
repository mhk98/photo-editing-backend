const router = require("express").Router();
const ImageManipulationTestimonial = require("../../controllers/imageManipulationTestimonial/imageManipulationTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageManipulationTestimonial.createImageManipulationTestimonial);
router.get("/", ImageManipulationTestimonial.getAllImageManipulationTestimonial);
router.delete("/:id", ImageManipulationTestimonial.deleteImageManipulationTestimonial);
router.patch("/:id", singleUpload, ImageManipulationTestimonial.updateImageManipulationTestimonial);

module.exports = router;
