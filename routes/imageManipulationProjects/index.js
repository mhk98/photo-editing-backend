const router = require("express").Router();
const ImageManipulationProjects = require("../../controllers/imageManipulationProjects/imageManipulationProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageManipulationProjects.createImageManipulationProjects);
router.get("/", ImageManipulationProjects.getAllImageManipulationProjects);
router.delete("/:id", ImageManipulationProjects.deleteImageManipulationProjects);
router.patch("/:id", singleUpload, ImageManipulationProjects.updateImageManipulationProjects);

module.exports = router;
