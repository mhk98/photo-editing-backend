const router = require("express").Router();
const ShadowCreationPrice = require("../../controllers/shadowCreationPrice/shadowCreationPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ShadowCreationPrice.createShadowCreationPrice);
router.get("/", ShadowCreationPrice.getAllShadowCreationPrice);
router.delete("/:id", ShadowCreationPrice.deleteShadowCreationPrice);
router.patch("/:id", singleUpload, ShadowCreationPrice.updateShadowCreationPrice);

module.exports = router;
