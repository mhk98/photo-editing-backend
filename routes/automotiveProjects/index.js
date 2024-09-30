const router = require("express").Router();
const AutomotiveProjects = require("../../controllers/automotiveProjects/automotiveProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, AutomotiveProjects.createAutomotiveProjects);
router.get("/", AutomotiveProjects.getAllAutomotiveProjects);
router.delete("/:id", AutomotiveProjects.deleteAutomotiveProjects);
router.patch("/:id", singleUpload, AutomotiveProjects.updateAutomotiveProjects);

module.exports = router;
