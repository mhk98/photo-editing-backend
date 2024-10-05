const router = require("express").Router();
const Automotive = require("../../controllers/automotive/automotive.controller");
const auth = require("../../middlewares/auth");
const {  doubleUpload } = require("../../middlewares/upload");

router.post("/create", doubleUpload, Automotive.createAutomotive);
router.get("/", Automotive.getAllAutomotive);
router.delete("/:id", Automotive.deleteAutomotive);
router.patch("/:id",doubleUpload, Automotive.updateAutomotive);

module.exports = router;
