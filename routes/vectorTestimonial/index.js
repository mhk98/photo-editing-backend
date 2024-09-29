const router = require("express").Router();
const clippingPathTestimonial = require("../../controllers/clippingPathTestimonial/clippingPathTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, clippingPathTestimonial.createClippingPathTestimonial);
router.get("/", clippingPathTestimonial.getAllClippingPathTestimonial);
router.delete("/:id", clippingPathTestimonial.deleteClippingPathTestimonial);
router.patch("/:id", singleUpload, clippingPathTestimonial.updateClippingPathTestimonial);

module.exports = router;
