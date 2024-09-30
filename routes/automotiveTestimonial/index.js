const router = require("express").Router();
const AutomotiveTestimonial = require("../../controllers/automotiveTestimonial/automotiveTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, AutomotiveTestimonial.createAutomotiveTestimonial);
router.get("/", AutomotiveTestimonial.getAllAutomotiveTestimonial);
router.delete("/:id", AutomotiveTestimonial.deleteAutomotiveTestimonial);
router.patch("/:id", singleUpload, AutomotiveTestimonial.updateAutomotiveTestimonial);

module.exports = router;
