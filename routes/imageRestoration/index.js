const router = require("express").Router();
const ImageRestoration = require("../../controllers/imageRestoration/imageRestoration.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ImageRestoration.createImageRestoration);
router.get("/", ImageRestoration.getAllImageRestoration);
router.delete("/:id", ImageRestoration.deleteImageRestoration);
router.patch("/:id",singleUpload, ImageRestoration.updateImageRestoration);

module.exports = router;
