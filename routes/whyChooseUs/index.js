const router = require("express").Router();
const whyChooseUs = require("../../controllers/whyChooseUs/whyChooseUs.controller");
const auth = require("../../middlewares/auth");
const {  quintupleUpload } = require("../../middlewares/upload");

router.post("/create", quintupleUpload, whyChooseUs.createWhyChooseUs);
router.get("/", whyChooseUs.getAllWhyChooseUs);
router.delete("/:id", whyChooseUs.deleteWhyChooseUs);
router.patch("/:id", quintupleUpload, whyChooseUs.updateWhyChooseUs);

module.exports = router;
