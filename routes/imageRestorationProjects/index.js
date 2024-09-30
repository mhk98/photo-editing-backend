const router = require("express").Router();
const ImageRestorationProjects = require("../../controllers/imageRestorationProjects/imageRestorationProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRestorationProjects.createImageRestorationProjects);
router.get("/", ImageRestorationProjects.getAllImageRestorationProjects);
router.delete("/:id", ImageRestorationProjects.deleteImageRestorationProjects);
router.patch("/:id", singleUpload, ImageRestorationProjects.updateImageRestorationProjects);

module.exports = router;
