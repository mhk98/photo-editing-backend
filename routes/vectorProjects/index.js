const router = require("express").Router();
const VectorProjects = require("../../controllers/vectorProjects/vectorProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, VectorProjects.createVectorProjects);
router.get("/", VectorProjects.getAllVectorProjects);
router.delete("/:id", VectorProjects.deleteVectorProjects);
router.patch("/:id", singleUpload, VectorProjects.updateVectorProjects);

module.exports = router;
