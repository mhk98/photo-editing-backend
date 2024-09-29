const router = require("express").Router();
const BackgroundRemovalProjects = require("../../controllers/backgroundRemovalProjects/backgroundRemovalProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, BackgroundRemovalProjects.createBackgroundRemovalProjects);
router.get("/", BackgroundRemovalProjects.getAllBackgroundRemovalProjects);
router.delete("/:id", BackgroundRemovalProjects.deleteBackgroundRemovalProjects);
router.patch("/:id", singleUpload, BackgroundRemovalProjects.updateBackgroundRemovalProjects);

module.exports = router;
