const router = require("express").Router();
const ReflectionCreationTestimonial = require("../../controllers/reflectionCreationTestimonial/reflectionCreationTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ReflectionCreationTestimonial.createReflectionCreationTestimonial);
router.get("/", ReflectionCreationTestimonial.getAllReflectionCreationTestimonial);
router.delete("/:id", ReflectionCreationTestimonial.deleteReflectionCreationTestimonial);
router.patch("/:id", singleUpload, ReflectionCreationTestimonial.updateReflectionCreationTestimonial);

module.exports = router;
