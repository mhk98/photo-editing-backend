const router = require("express").Router();
const ReflectionCreation = require("../../controllers/reflectionCreation/reflectionCreation.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, ReflectionCreation.createReflectionCreation);
router.get("/", ReflectionCreation.getAllReflectionCreation);
router.delete("/:id", ReflectionCreation.deleteReflectionCreation);
router.patch("/:id",doubleUpload, ReflectionCreation.updateReflectionCreation);

module.exports = router;
