const router = require("express").Router();
const ImageRetouching = require("../../controllers/imageRetouching/imageRetouching.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRetouching.createImageRetouching);
router.get("/", ImageRetouching.getAllImageRetouching);
router.delete("/:id", ImageRetouching.deleteImageRetouching);
router.patch("/:id",singleUpload, ImageRetouching.updateImageRetouching);

module.exports = router;
