const router = require("express").Router();
const GhostMannequin = require("../../controllers/ghostMannequin/ghostMannequin.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, GhostMannequin.createGhostMannequin);
router.get("/", GhostMannequin.getAllGhostMannequin);
router.delete("/:id", GhostMannequin.deleteGhostMannequin);
router.patch("/:id",singleUpload, GhostMannequin.updateGhostMannequin);

module.exports = router;
