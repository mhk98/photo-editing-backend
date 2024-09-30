const router = require("express").Router();
const GhostMannequinHowItWorks = require("../../controllers/ghostMannequinHowItWorks/ghostMannequinHowItWorks");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, GhostMannequinHowItWorks.createGhostMannequinHowItWorks);
router.get("/", GhostMannequinHowItWorks.getAllGhostMannequinHowItWorks);
router.delete("/:id", GhostMannequinHowItWorks.deleteGhostMannequinHowItWorks);
router.patch("/:id",singleUpload, GhostMannequinHowItWorks.updateGhostMannequinHowItWorks);

module.exports = router;
