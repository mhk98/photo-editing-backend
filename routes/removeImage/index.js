const router = require("express").Router();
const RemoveImage = require("../../controllers/removeImage/removeImage.controller");
const auth = require("../../middlewares/auth");
const { doubleUpload, singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, RemoveImage.createRemoveImage);
router.get("/", RemoveImage.getAllRemoveImage);
router.delete("/:id", RemoveImage.deleteRemoveImage);
router.patch("/:id", singleUpload, RemoveImage.updateRemoveImage);

module.exports = router;
