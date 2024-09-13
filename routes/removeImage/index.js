const router = require("express").Router();
const RemoveImage = require("../../controllers/removeImage/removeImage.controller");
const auth = require("../../middlewares/auth");
const { doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, RemoveImage.createRemoveImage);
router.get("/", RemoveImage.getAllRemoveImage);
router.delete("/:id", RemoveImage.deleteRemoveImage);
router.patch("/:id", doubleUpload, RemoveImage.updateRemoveImage);

module.exports = router;
