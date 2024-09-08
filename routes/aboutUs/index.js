const router = require("express").Router();
const aboutUs = require("../../controllers/aboutUs/aboutUs.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, aboutUs.createAboutUs);
router.get("/", aboutUs.getAllAboutUs);
router.delete("/:id", aboutUs.deleteAboutUs);
router.patch("/:id", singleUpload, aboutUs.updateAboutUs);

module.exports = router;
