const router = require("express").Router();
const howItWorks = require("../../controllers/howItWorks/howItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, howItWorks.createHowItWorks);
router.get("/", howItWorks.getAllHowItWorks);
router.delete("/:id", howItWorks.deleteHowItWorks);
router.patch("/:id", singleUpload, howItWorks.updateHowItWorks);

module.exports = router;
