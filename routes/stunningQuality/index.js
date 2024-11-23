const router = require("express").Router();
const stunningQuality = require("../../controllers/stunningQuality/stunningQuality.controller");
const auth = require("../../middlewares/auth");
const { decupleUpload } = require("../../middlewares/upload");

router.post("/create", decupleUpload, stunningQuality.createStunningQuality);
router.get("/", stunningQuality.getAllStunningQuality);
router.delete("/:id", stunningQuality.deleteStunningQuality);
router.patch("/:id",decupleUpload, stunningQuality.updateStunningQuality);

module.exports = router;
