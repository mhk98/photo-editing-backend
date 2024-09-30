const router = require("express").Router();
const ShadowCreationHowItWorks = require("../../controllers/shadowCreationHowItWorks/shadowCreationHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ShadowCreationHowItWorks.createShadowCreationHowItWorks);
router.get("/", ShadowCreationHowItWorks.getAllShadowCreationHowItWorks);
router.delete("/:id", ShadowCreationHowItWorks.deleteShadowCreationHowItWorks);
router.patch("/:id",singleUpload, ShadowCreationHowItWorks.updateShadowCreationHowItWorks);

module.exports = router;
