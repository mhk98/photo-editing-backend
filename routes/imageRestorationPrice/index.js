const router = require("express").Router();
const ImageRestorationPrice = require("../../controllers/imageRestorationPrice/imageRestorationPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRestorationPrice.createImageRestorationPrice);
router.get("/", ImageRestorationPrice.getAllImageRestorationPrice);
router.delete("/:id", ImageRestorationPrice.deleteImageRestorationPrice);
router.patch("/:id", singleUpload, ImageRestorationPrice.updateImageRestorationPrice);

module.exports = router;
