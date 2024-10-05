const router = require("express").Router();
const ImageMasking = require("../../controllers/imageMasking/imageMasking.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ImageMasking.createImageMasking);
router.get("/", ImageMasking.getAllImageMasking);
router.delete("/:id", ImageMasking.deleteImageMasking);
router.patch("/:id",doubleUpload, ImageMasking.updateImageMasking);

module.exports = router;
