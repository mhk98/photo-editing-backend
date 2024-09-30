const router = require("express").Router();
const VectorPrice = require("../../controllers/vectorPrice/vectorPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, VectorPrice.createVectorPrice);
router.get("/", VectorPrice.getAllVectorPrice);
router.delete("/:id", VectorPrice.deleteVectorPrice);
router.patch("/:id", singleUpload, VectorPrice.updateVectorPrice);

module.exports = router;
