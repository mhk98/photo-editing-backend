const router = require("express").Router();
const GhostMannequin = require("../../controllers/ghostMannequin/ghostMannequin.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, GhostMannequin.createGhostMannequin);
router.get("/", GhostMannequin.getAllGhostMannequin);
router.delete("/:id", GhostMannequin.deleteGhostMannequin);
router.patch("/:id",doubleUpload, GhostMannequin.updateGhostMannequin);

module.exports = router;
