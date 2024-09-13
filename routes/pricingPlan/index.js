const router = require("express").Router();
const pricingPlan = require("../../controllers/pricingPlan/pricingPlan.controller");
const auth = require("../../middlewares/auth");
const { quadrupleUpload } = require("../../middlewares/upload");

router.post("/create", quadrupleUpload, pricingPlan.createPricingPlan);
router.get("/", pricingPlan.getAllPricingPlan);
router.delete("/:id", pricingPlan.deletePricingPlan);
router.patch("/:id", quadrupleUpload, pricingPlan.updatePricingPlan);

module.exports = router;
