const router = require("express").Router();
const ClippingPath = require("../../controllers/clippingPath/clippingPath.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ClippingPath.createClippingPath);
router.get("/", ClippingPath.getAllClippingPath);
router.delete("/:id", ClippingPath.deleteClippingPath);
router.patch("/:id",singleUpload, ClippingPath.updateClippingPath);

module.exports = router;
