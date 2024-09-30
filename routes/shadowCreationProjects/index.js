const router = require("express").Router();
const ShadowCreationProjects = require("../../controllers/shadowCreationProjects/shadowCreationProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ShadowCreationProjects.createShadowCreationProjects);
router.get("/", ShadowCreationProjects.getAllShadowCreationProjects);
router.delete("/:id", ShadowCreationProjects.deleteShadowCreationProjects);
router.patch("/:id", singleUpload, ShadowCreationProjects.updateShadowCreationProjects);

module.exports = router;
