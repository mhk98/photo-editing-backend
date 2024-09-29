const router = require("express").Router();
const BackgroundRemovalTestimonial = require("../../controllers/backgroundRemovalTestimonial/backgroundRemovalTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, BackgroundRemovalTestimonial.createBackgroundRemovalTestimonial);
router.get("/", BackgroundRemovalTestimonial.getAllBackgroundRemovalTestimonial);
router.delete("/:id", BackgroundRemovalTestimonial.deleteBackgroundRemovalTestimonial);
router.patch("/:id", singleUpload, BackgroundRemovalTestimonial.updateBackgroundRemovalTestimonial);

module.exports = router;
