const router = require("express").Router();
const VectorHowItWorks = require("../../controllers/vectorHowItWorks/vectorHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, VectorHowItWorks.createVectorHowItWorks);
router.get("/", VectorHowItWorks.getAllVectorHowItWorks);
router.delete("/:id", VectorHowItWorks.deleteVectorHowItWorks);
router.patch("/:id",singleUpload, VectorHowItWorks.updateVectorHowItWorks);

module.exports = router;
