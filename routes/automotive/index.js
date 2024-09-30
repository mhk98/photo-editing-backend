const router = require("express").Router();
const Automotive = require("../../controllers/automotive/automotive.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.post("/create", singleUpload, Automotive.createAutomotive);
router.get("/", Automotive.getAllAutomotive);
router.delete("/:id", Automotive.deleteAutomotive);
router.patch("/:id",singleUpload, Automotive.updateAutomotive);

module.exports = router;
