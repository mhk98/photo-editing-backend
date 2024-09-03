const router = require("express").Router();
const user = require("./users");
const homeBanner = require("./homeBanner");


router.use("/user", user);
router.use("/homeBanner", homeBanner);


module.exports = router;
