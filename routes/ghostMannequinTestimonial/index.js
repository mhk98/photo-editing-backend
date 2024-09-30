const router = require("express").Router();
const GhostMannequinTestimonial = require("../../controllers/ghostMannequinTestimonial/ghostMannequinTestimonial.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, GhostMannequinTestimonial.createGhostMannequinTestimonial);
router.get("/", GhostMannequinTestimonial.getAllGhostMannequinTestimonial);
router.delete("/:id", GhostMannequinTestimonial.deleteGhostMannequinTestimonial);
router.patch("/:id", singleUpload, GhostMannequinTestimonial.updateGhostMannequinTestimonial);

module.exports = router;
