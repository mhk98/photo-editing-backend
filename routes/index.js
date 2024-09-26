const router = require("express").Router();
const user = require("./users");
const homeBanner = require("./homeBanner");
const homeSlider = require("./homeSlider");
const aboutUs = require("./aboutUs");
const howItWorks = require("./howItWorks");
const whyChooseUs = require("./whyChooseUs");
const stunningQuality = require("./stunningQuality");
const testimonial = require("./testimonial");
const pricingPlan = require("./pricingPlan");
const news = require("./news");
const removeImage = require("./removeImage");
const clients = require("./clients");
const clippingPath = require("./clippingPath");
const clippingPathPrice = require("./clippingPathPrice");
const clippingPathTestimonial = require("./clippingPathTestimonial");
const clippingPathHowItWorks = require("./clippingPathHowItWorks");
const clippingPathProjects = require("./clippingPathProjects");

router.use("/user", user);
router.use("/homeBanner", homeBanner);
router.use("/homeSlider", homeSlider);
router.use("/aboutUs", aboutUs);
router.use("/howItWorks", howItWorks);
router.use("/whyChooseUs", whyChooseUs);
router.use("/stunningQuality", stunningQuality);
router.use("/testimonial", testimonial);
router.use("/pricingPlan", pricingPlan);
router.use("/news", news);
router.use("/removeImage", removeImage);
router.use("/clients", clients);
router.use("/clippingPath", clippingPath);
router.use("/clippingPathPrice", clippingPathPrice);
router.use("/clippingPathTestimonial", clippingPathTestimonial);
router.use("/clippingPathHowItWorks", clippingPathHowItWorks);
router.use("/clippingPathProjects", clippingPathProjects);

module.exports = router;
