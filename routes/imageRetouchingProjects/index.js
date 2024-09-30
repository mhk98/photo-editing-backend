const router = require("express").Router();
const ImageRetouchingProjects = require("../../controllers/imageRetouchingProjects/imageRetouchingProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRetouchingProjects.createImageRetouchingProjects);
router.get("/", ImageRetouchingProjects.getAllImageRetouchingProjects);
router.delete("/:id", ImageRetouchingProjects.deleteImageRetouchingProjects);
router.patch("/:id", singleUpload, ImageRetouchingProjects.updateImageRetouchingProjects);

module.exports = router;
