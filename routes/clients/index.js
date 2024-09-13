const router = require("express").Router();
const clients = require("../../controllers/clients/clients.controller");
const auth = require("../../middlewares/auth");
const {
  quintupleUpload,
  sextupleeUpload,
} = require("../../middlewares/upload");

router.post("/create", sextupleeUpload, clients.createClients);
router.get("/", clients.getAllClients);
router.delete("/:id", clients.deleteClients);
router.patch("/:id", sextupleeUpload, clients.updateClients);

module.exports = router;
