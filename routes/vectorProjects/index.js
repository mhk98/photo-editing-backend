const router = require("express").Router();
const ClippingPathProjects = require("../../controllers/clippingPathProjects/clippingPathProjects.controller");
const auth = require("../../middlewares/auth");
const {  singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, ClippingPathProjects.createClippingPathProjects);
router.get("/", ClippingPathProjects.getAllClippingPathProjects);
router.delete("/:id", ClippingPathProjects.deleteClippingPathProjects);
router.patch("/:id", singleUpload, ClippingPathProjects.updateClippingPathProjects);

module.exports = router;
