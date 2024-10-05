const router = require("express").Router();
const ImageRetouching = require("../../controllers/imageRetouching/imageRetouching.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ImageRetouching.createImageRetouching);
router.get("/", ImageRetouching.getAllImageRetouching);
router.delete("/:id", ImageRetouching.deleteImageRetouching);
router.patch("/:id",doubleUpload, ImageRetouching.updateImageRetouching);

module.exports = router;
