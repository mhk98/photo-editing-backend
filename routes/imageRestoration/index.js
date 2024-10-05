const router = require("express").Router();
const ImageRestoration = require("../../controllers/imageRestoration/imageRestoration.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ImageRestoration.createImageRestoration);
router.get("/", ImageRestoration.getAllImageRestoration);
router.delete("/:id", ImageRestoration.deleteImageRestoration);
router.patch("/:id",doubleUpload, ImageRestoration.updateImageRestoration);

module.exports = router;
