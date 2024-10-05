const router = require("express").Router();
const ClippingPath = require("../../controllers/clippingPath/clippingPath.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ClippingPath.createClippingPath);
router.get("/", ClippingPath.getAllClippingPath);
router.delete("/:id", ClippingPath.deleteClippingPath);
router.patch("/:id",doubleUpload, ClippingPath.updateClippingPath);

module.exports = router;
