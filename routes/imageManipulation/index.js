const router = require("express").Router();
const ImageManipulation = require("../../controllers/imageManipulation/imageManipulation.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageManipulation.createImageManipulation);
router.get("/", ImageManipulation.getAllImageManipulation);
router.delete("/:id", ImageManipulation.deleteImageManipulation);
router.patch("/:id",singleUpload, ImageManipulation.updateImageManipulation);

module.exports = router;
