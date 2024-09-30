const router = require("express").Router();
const Vector = require("../../controllers/vector/vector.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, Vector.createVector);
router.get("/", Vector.getAllVector);
router.delete("/:id", Vector.deleteVector);
router.patch("/:id",singleUpload, Vector.updateVector);

module.exports = router;
