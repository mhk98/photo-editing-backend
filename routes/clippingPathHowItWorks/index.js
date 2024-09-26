const router = require("express").Router();
const ClippingPathHowItWorks = require("../../controllers/clippingPathHowItWorks/clippingPathHowItWorks");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ClippingPathHowItWorks.createClippingPathHowItWorks);
router.get("/", ClippingPathHowItWorks.getAllClippingPathHowItWorks);
router.delete("/:id", ClippingPathHowItWorks.deleteClippingPathHowItWorks);
router.patch("/:id",singleUpload, ClippingPathHowItWorks.updateClippingPathHowItWorks);

module.exports = router;
