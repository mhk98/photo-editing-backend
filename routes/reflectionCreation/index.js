const router = require("express").Router();
const ReflectionCreation = require("../../controllers/reflectionCreation/reflectionCreation.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ReflectionCreation.createReflectionCreation);
router.get("/", ReflectionCreation.getAllReflectionCreation);
router.delete("/:id", ReflectionCreation.deleteReflectionCreation);
router.patch("/:id",singleUpload, ReflectionCreation.updateReflectionCreation);

module.exports = router;
