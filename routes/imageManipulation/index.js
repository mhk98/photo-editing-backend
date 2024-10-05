const router = require("express").Router();
const ImageManipulation = require("../../controllers/imageManipulation/imageManipulation.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ImageManipulation.createImageManipulation);
router.get("/", ImageManipulation.getAllImageManipulation);
router.delete("/:id", ImageManipulation.deleteImageManipulation);
router.patch("/:id",doubleUpload, ImageManipulation.updateImageManipulation);

module.exports = router;
