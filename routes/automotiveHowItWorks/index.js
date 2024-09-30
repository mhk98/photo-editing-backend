const router = require("express").Router();
const AutomotiveHowItWorks = require("../../controllers/automotiveHowItWorks/automotiveHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, AutomotiveHowItWorks.createAutomotiveHowItWorks);
router.get("/", AutomotiveHowItWorks.getAllAutomotiveHowItWorks);
router.delete("/:id", AutomotiveHowItWorks.deleteAutomotiveHowItWorks);
router.patch("/:id",singleUpload, AutomotiveHowItWorks.updateAutomotiveHowItWorks);

module.exports = router;
