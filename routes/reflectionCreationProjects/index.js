const router = require("express").Router();
const ReflectionCreationProjects = require("../../controllers/reflectionCreationProjects/reflectionCreationProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ReflectionCreationProjects.createReflectionCreationProjects);
router.get("/", ReflectionCreationProjects.getAllReflectionCreationProjects);
router.delete("/:id", ReflectionCreationProjects.deleteReflectionCreationProjects);
router.patch("/:id", singleUpload, ReflectionCreationProjects.updateReflectionCreationProjects);

module.exports = router;
