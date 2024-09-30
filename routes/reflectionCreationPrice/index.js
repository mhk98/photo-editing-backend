const router = require("express").Router();
const ReflectionCreationPrice = require("../../controllers/reflectionCreationPrice/reflectionCreationPrice.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ReflectionCreationPrice.createReflectionCreationPrice);
router.get("/", ReflectionCreationPrice.getAllReflectionCreationPrice);
router.delete("/:id", ReflectionCreationPrice.deleteReflectionCreationPrice);
router.patch("/:id", singleUpload, ReflectionCreationPrice.updateReflectionCreationPrice);

module.exports = router;
