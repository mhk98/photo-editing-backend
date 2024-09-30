const router = require("express").Router();
const ShadowCreation = require("../../controllers/shadowCreation/shadowCreation.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ShadowCreation.createShadowCreation);
router.get("/", ShadowCreation.getAllShadowCreation);
router.delete("/:id", ShadowCreation.deleteShadowCreation);
router.patch("/:id",singleUpload, ShadowCreation.updateShadowCreation);

module.exports = router;
