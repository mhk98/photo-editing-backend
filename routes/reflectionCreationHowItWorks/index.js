const router = require("express").Router();
const ReflectionCreationHowItWorks = require("../../controllers/reflectionCreationHowItWorks/reflectionCreationHowItWorks.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ReflectionCreationHowItWorks.createReflectionCreationHowItWorks);
router.get("/", ReflectionCreationHowItWorks.getAllReflectionCreationHowItWorks);
router.delete("/:id", ReflectionCreationHowItWorks.deleteReflectionCreationHowItWorks);
router.patch("/:id",singleUpload, ReflectionCreationHowItWorks.updateReflectionCreationHowItWorks);

module.exports = router;
