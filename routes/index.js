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

const backgroundRemoval = require("./backgroundRemoval");
const backgroundRemovalPrice = require("./backgroundRemovalPrice");
const backgroundRemovalTestimonial = require("./backgroundRemovalTestimonial");
const backgroundRemovalHowItWorks = require("./backgroundRemovalHowItWorks");
const backgroundRemovalProjects = require("./backgroundRemovalProjects");

const imageRetouching = require("./imageRetouching");
const imageRetouchingPrice = require("./imageRetouchingPrice");
const imageRetouchingTestimonial = require("./imageRetouchingTestimonial");
const imageRetouchingHowItWorks = require("./imageRetouchingHowItWorks");
const imageRetouchingProjects = require("./imageRetouchingProjects");

const ghostMannequin = require("./ghostMannequin");
const ghostMannequinPrice = require("./ghostMannequinPrice");
const ghostMannequinTestimonial = require("./ghostMannequinTestimonial");
const ghostMannequinHowItWorks = require("./ghostMannequinHowItWorks");
const ghostMannequinProjects = require("./ghostMannequinProjects");

const imageMasking = require("./imageMasking");
const imageMaskingPrice = require("./imageMaskingPrice");
const imageMaskingTestimonial = require("./imageMaskingTestimonial");
const imageMaskingHowItWorks = require("./imageMaskingHowItWorks");
const imageMaskingProjects = require("./imageMaskingPrice");

const shadowCreation = require("./shadowCreation");
const shadowCreationPrice = require("./shadowCreationPrice");
const shadowCreationTestimonial = require("./shadowCreationTestimonial");
const shadowCreationHowItWorks = require("./shadowCreationHowItWorks");
const shadowCreationProjects = require("./shadowCreationProjects");

const colorCorrection = require("./colorCorrection");
const colorCorrectionPrice = require("./colorCorrectionPrice");
const colorCorrectionTestimonial = require("./colorCorrectionTestimonial");
const colorCorrectionHowItWorks = require("./colorCorrectionHowItWorks");
const colorCorrectionProjects = require("./colorCorrectionProjects");

const imageRestoration = require("./imageRestoration");
const imageRestorationPrice = require("./imageRestorationPrice");
const imageRestorationTestimonial = require("./imageRestorationTestimonial");
const imageRestorationHowItWorks = require("./imageRestorationHowItWorks");
const imageRestorationProjects = require("./imageRestorationProjects");

const imageManipulation = require("./imageManipulation");
const imageManipulationPrice = require("./imageManipulationPrice");
const imageManipulationTestimonial = require("./imageManipulationTestimonial");
const imageManipulationHowItWorks = require("./imageManipulationHowItWorks");
const imageManipulationProjects = require("./imageManipulationProjects");

const automotive = require("./automotive");
const automotivePrice = require("./automotivePrice");
const automotiveTestimonial = require("./automotiveTestimonial");
const automotiveHowItWorks = require("./automotiveHowItWorks");
const automotiveProjects = require("./automotiveProjects");

const reflectionCreation = require("./reflectionCreation");
const reflectionCreationPrice = require("./reflectionCreationPrice");
const reflectionCreationTestimonial = require("./reflectionCreationTestimonial");
const reflectionCreationHowItWorks = require("./reflectionCreationHowItWorks");
const reflectionCreationProjects = require("./reflectionCreationProjects");

const vector = require("./vector");
const vectorPrice = require("./vectorPrice");
const vectorTestimonial = require("./vectorTestimonial");
const vectorHowItWorks = require("./vectorHowItWorks");
const vectorProjects = require("./vectorProjects");

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

router.use("/backgroundRemoval", backgroundRemoval);
router.use("/backgroundRemovalPrice", backgroundRemovalPrice);
router.use("/backgroundRemovalTestimonial", backgroundRemovalTestimonial);
router.use("/backgroundRemovalHowItWorks", backgroundRemovalHowItWorks);
router.use("/backgroundRemovalProjects", backgroundRemovalProjects);

router.use("/imageRetouching",              imageRetouching);
router.use("/imageRetouchingPrice",         imageRetouchingPrice);
router.use("/imageRetouchingTestimonial",   imageRetouchingTestimonial);
router.use("/imageRetouchingHowItWorks",    imageRetouchingHowItWorks);
router.use("/imageRetouchingProjects",      imageRetouchingProjects);

router.use("/ghostMannequin",              ghostMannequin);
router.use("/ghostMannequinPrice",         ghostMannequinPrice);
router.use("/ghostMannequinTestimonial",   ghostMannequinTestimonial);
router.use("/ghostMannequinHowItWorks",    ghostMannequinHowItWorks);
router.use("/ghostMannequinProjects",      ghostMannequinProjects);

router.use("/imageMasking",              imageMasking);
router.use("/imageMaskingPrice",         imageMaskingPrice);
router.use("/imageMaskingTestimonial",   imageMaskingTestimonial);
router.use("/imageMaskingHowItWorks",    imageMaskingHowItWorks);
router.use("/imageMaskingProjects",      imageMaskingProjects);

router.use("/shadowCreation",              shadowCreation);
router.use("/shadowCreationPrice",         shadowCreationPrice);
router.use("/shadowCreationTestimonial",   shadowCreationTestimonial);
router.use("/shadowCreationHowItWorks",    shadowCreationHowItWorks);
router.use("/shadowCreationProjects",      shadowCreationProjects);

router.use("/colorCorrection",              colorCorrection);
router.use("/colorCorrectionPrice",         colorCorrectionPrice);
router.use("/colorCorrectionTestimonial",   colorCorrectionTestimonial);
router.use("/colorCorrectionHowItWorks",    colorCorrectionHowItWorks);
router.use("/colorCorrectionProjects",      colorCorrectionProjects);

router.use("/imageRestoration",              imageRestoration);
router.use("/imageRestorationPrice",         imageRestorationPrice);
router.use("/imageRestorationTestimonial",   imageRestorationTestimonial);
router.use("/imageRestorationHowItWorks",    imageRestorationHowItWorks);
router.use("/imageRestorationProjects",      imageRestorationProjects);

router.use("/imageManipulation",              imageManipulation);
router.use("/imageManipulationPrice",         imageManipulationPrice);
router.use("/imageManipulationTestimonial",   imageManipulationTestimonial);
router.use("/imageManipulationHowItWorks",    imageManipulationHowItWorks);
router.use("/imageManipulationProjects",      imageManipulationProjects);

router.use("/automotive",              automotive);
router.use("/automotivePrice",         automotivePrice);
router.use("/automotiveTestimonial",   automotiveTestimonial);
router.use("/automotiveHowItWorks",    automotiveHowItWorks);
router.use("/automotiveProjects",      automotiveProjects);

router.use("/reflectionCreation",              reflectionCreation);
router.use("/reflectionCreationPrice",         reflectionCreationPrice);
router.use("/reflectionCreationTestimonial",   reflectionCreationTestimonial);
router.use("/reflectionCreationHowItWorks",    reflectionCreationHowItWorks);
router.use("/reflectionCreationProjects",      reflectionCreationProjects);

router.use("/vector",              vector);
router.use("/vectorPrice",         vectorPrice);
router.use("/vectorTestimonial",   vectorTestimonial);
router.use("/vectorHowItWorks",    vectorHowItWorks);
router.use("/vectorProjects",      vectorProjects);

module.exports = router;
