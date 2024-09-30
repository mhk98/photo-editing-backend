const router = require("express").Router();
const ImageManipulationPrice = require("../../controllers/imageManipulationPrice/imageManipulationPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageManipulationPrice.createImageManipulationPrice);
router.get("/", ImageManipulationPrice.getAllImageManipulationPrice);
router.delete("/:id", ImageManipulationPrice.deleteImageManipulationPrice);
router.patch("/:id", singleUpload, ImageManipulationPrice.updateImageManipulationPrice);

module.exports = router;
