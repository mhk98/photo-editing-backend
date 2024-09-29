const router = require("express").Router();
const clippingPathPrice = require("../../controllers/clippingPathPrice/clippingPathPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, clippingPathPrice.createClippingPathPrice);
router.get("/", clippingPathPrice.getAllClippingPathPrice);
router.delete("/:id", clippingPathPrice.deleteClippingPathPrice);
router.patch("/:id", singleUpload, clippingPathPrice.updateClippingPathPrice);

module.exports = router;
