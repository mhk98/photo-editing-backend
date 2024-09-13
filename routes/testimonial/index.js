const router = require("express").Router();
const Testimonial = require("../../controllers/testimonial/testimonial.controller");
const auth = require("../../middlewares/auth");
const { tripleUpload } = require("../../middlewares/upload");

router.post("/create", tripleUpload, Testimonial.createTestimonial);
router.get("/", Testimonial.getAllTestimonial);
router.delete("/:id", Testimonial.deleteTestimonial);
router.patch("/:id", tripleUpload, Testimonial.updateTestimonial);

module.exports = router;
