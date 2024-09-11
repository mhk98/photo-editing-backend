const router = require("express").Router();
const stunningQuality = require("../../controllers/stunningQuality/stunningQuality.controller");
const auth = require("../../middlewares/auth");
const { quintupleUpload } = require("../../middlewares/upload");

router.post("/create", quintupleUpload, stunningQuality.createStunningQuality);
router.get("/", stunningQuality.getAllStunningQuality);
router.delete("/:id", stunningQuality.deleteStunningQuality);
router.patch("/:id",quintupleUpload, stunningQuality.updateStunningQuality);

module.exports = router;
