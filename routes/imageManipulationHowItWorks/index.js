const router = require("express").Router();
const ImageManipulationHowItWorks = require("../../controllers/imageManipulationHowItWorks/imageManipulationHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageManipulationHowItWorks.createImageManipulationHowItWorks);
router.get("/", ImageManipulationHowItWorks.getAllImageManipulationHowItWorks);
router.delete("/:id", ImageManipulationHowItWorks.deleteImageManipulationHowItWorks);
router.patch("/:id",singleUpload, ImageManipulationHowItWorks.updateImageManipulationHowItWorks);

module.exports = router;
