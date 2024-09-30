const router = require("express").Router();
const GhostMannequinProjects = require("../../controllers/ghostMannequinProjects/ghostMannequinProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, GhostMannequinProjects.createGhostMannequinProjects);
router.get("/", GhostMannequinProjects.getAllGhostMannequinProjects);
router.delete("/:id", GhostMannequinProjects.deleteGhostMannequinProjects);
router.patch("/:id", singleUpload, GhostMannequinProjects.updateGhostMannequinProjects);

module.exports = router;
