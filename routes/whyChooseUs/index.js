const router = require("express").Router();
const whyChooseUs = require("../../controllers/whyChooseUs/whyChooseUs.controller");
const auth = require("../../middlewares/auth");
const { doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, whyChooseUs.createWhyChooseUs);
router.get("/", whyChooseUs.getAllWhyChooseUs);
router.delete("/:id", whyChooseUs.deleteWhyChooseUs);
router.patch("/:id", doubleUpload, whyChooseUs.updateWhyChooseUs);

module.exports = router;
