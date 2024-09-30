const router = require("express").Router();
const AutomotivePrice = require("../../controllers/automotivePrice/automotivePrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, AutomotivePrice.createAutomotivePrice);
router.get("/", AutomotivePrice.getAllAutomotivePrice);
router.delete("/:id", AutomotivePrice.deleteAutomotivePrice);
router.patch("/:id", singleUpload, AutomotivePrice.updateAutomotivePrice);

module.exports = router;
