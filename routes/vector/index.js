const router = require("express").Router();
const Vector = require("../../controllers/vector/vector.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, Vector.createVector);
router.get("/", Vector.getAllVector);
router.delete("/:id", Vector.deleteVector);
router.patch("/:id",doubleUpload, Vector.updateVector);

module.exports = router;
