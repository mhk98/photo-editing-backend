const router = require("express").Router();
const ShadowCreationTestimonial = require("../../controllers/shadowCreationTestimonial/shadowCreationTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ShadowCreationTestimonial.createShadowCreationTestimonial);
router.get("/", ShadowCreationTestimonial.getAllShadowCreationTestimonial);
router.delete("/:id", ShadowCreationTestimonial.deleteShadowCreationTestimonial);
router.patch("/:id", singleUpload, ShadowCreationTestimonial.updateShadowCreationTestimonial);

module.exports = router;
