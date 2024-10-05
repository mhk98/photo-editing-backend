const router = require("express").Router();
const ShadowCreation = require("../../controllers/shadowCreation/shadowCreation.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ShadowCreation.createShadowCreation);
router.get("/", ShadowCreation.getAllShadowCreation);
router.delete("/:id", ShadowCreation.deleteShadowCreation);
router.patch("/:id",doubleUpload, ShadowCreation.updateShadowCreation);

module.exports = router;
