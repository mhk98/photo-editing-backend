const router = require("express").Router();
const GhostMannequinPrice = require("../../controllers/ghostMannequinPrice/ghostMannequinPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, GhostMannequinPrice.createGhostMannequinPrice);
router.get("/", GhostMannequinPrice.getAllGhostMannequinPrice);
router.delete("/:id", GhostMannequinPrice.deleteGhostMannequinPrice);
router.patch("/:id", singleUpload, GhostMannequinPrice.updateGhostMannequinPrice);

module.exports = router;
