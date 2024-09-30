const router = require("express").Router();
const ImageRetouchingPrice = require("../../controllers/imageRetouchingPrice/imageRetouchingPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRetouchingPrice.createImageRetouchingPrice);
router.get("/", ImageRetouchingPrice.getAllImageRetouchingPrice);
router.delete("/:id", ImageRetouchingPrice.deleteImageRetouchingPrice);
router.patch("/:id", singleUpload, ImageRetouchingPrice.updateImageRetouchingPrice);

module.exports = router;
