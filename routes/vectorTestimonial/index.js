const router = require("express").Router();
const VectorTestimonial = require("../../controllers/vectorTestimonial/vectorTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, VectorTestimonial.createVectorTestimonial);
router.get("/", VectorTestimonial.getAllVectorTestimonial);
router.delete("/:id", VectorTestimonial.deleteVectorTestimonial);
router.patch("/:id", singleUpload, VectorTestimonial.updateVectorTestimonial);

module.exports = router;
