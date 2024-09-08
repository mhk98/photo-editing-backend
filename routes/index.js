const router = require("express").Router();
const user = require("./users");
const homeBanner = require("./homeBanner");
const homeSlider = require("./homeSlider");
const aboutUs = require("./aboutUs");
const howItWorks = require("./howItWorks");

router.use("/user", user);
router.use("/homeBanner", homeBanner);
router.use("/homeSlider", homeSlider);
router.use("/aboutUs", aboutUs);
router.use("/howItWorks", howItWorks);

module.exports = router;
