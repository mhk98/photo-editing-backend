// import connection of sequelizeconsole
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// eslint-disable-next-line @typescript-eslint/no-var-requires
db.user = require("../models/users/user")(db.sequelize, DataTypes);
db.homeBanner = require("../models/homeBanner/homeBanner")(
  db.sequelize,
  DataTypes
);
db.homeSlider = require("../models/homeSlider/homeSlider")(
  db.sequelize,
  DataTypes
);
db.aboutUs = require("../models/aboutUs/aboutUs")(db.sequelize, DataTypes);
db.howItWorks = require("../models/howItWorks/howItWorks")(
  db.sequelize,
  DataTypes
);
db.whyChooseUs = require("../models/whyChooseUs/whyChooseUs")(
  db.sequelize,
  DataTypes
);
db.stunningQuality = require("../models/stunningQuality/stunningQuality")(
  db.sequelize,
  DataTypes
);
db.testimonial = require("../models/testimonial/testimonial")(
  db.sequelize,
  DataTypes
);
db.pricingPlan = require("../models/pricingPlan/pricingPlan")(
  db.sequelize,
  DataTypes
);
db.news = require("../models/news/news")(db.sequelize, DataTypes);
db.removeImage = require("../models/removeImage/removeImage")(
  db.sequelize,
  DataTypes
);
db.clients = require("../models/clients/clients")(db.sequelize, DataTypes);
db.clippingPathPrice = require("../models/clippingPathPrice/ghostMannequinPrice")(db.sequelize, DataTypes);
db.clippingPath = require("../models/clippingPath/clippingPath")(db.sequelize, DataTypes);
db.clippingPathHowItWorks = require("../models/clippingPathHowItWorks/clippingPathHowItWorks")(db.sequelize, DataTypes);
db.clippingPathProjects = require("../models/clippingPathProjects/clippingPathProjects")(db.sequelize, DataTypes);
db.clippingPathTestimonial = require("../models/clippingPathTestimonial/clippingPathTestimonial")(db.sequelize, DataTypes);

db.backgroundRemovalPrice = require("../models/backgroundRemovalPrice/backgroundRemovalPrice")(db.sequelize, DataTypes);
db.backgroundRemoval = require("../models/backgroundRemoval/backgroundRemoval")(db.sequelize, DataTypes);
db.backgroundRemovalHowItWorks = require("../models/backgroundRemovalHowItWorks/backgroundRemovalHowItWorks")(db.sequelize, DataTypes);
db.backgroundRemovalProjects = require("../models/backgroundRemovalProjects/backgroundRemovalProjects")(db.sequelize, DataTypes);
db.backgroundRemovalTestimonial = require("../models/backgroundRemovalTestimonial/backgroundRemovalTestimonial")(db.sequelize, DataTypes);

db.imageRetouching = require("../models/imageRetouching/imageRetouching")(db.sequelize, DataTypes);
db.imageRetouchingPrice = require("../models/imageRetouchingPrice/imageRetouchingPrice")(db.sequelize, DataTypes);
db.imageRetouchingHowItWorks = require("../models/imageRetouchingHowItWorks/imageRetouchingHowItWorks")(db.sequelize, DataTypes);
db.imageRetouchingProjects = require("../models/imageRetouchingProjects/imageRetouchingProjects")(db.sequelize, DataTypes);
db.imageRetouchingTestimonial = require("../models/imageRetouchingTestimonial/imageRetouchingTestimonial")(db.sequelize, DataTypes);

db.ghostMannequin = require("../models/ghostMannequin/ghostMannequin")(db.sequelize, DataTypes);
db.ghostMannequinPrice = require("../models/ghostMannequinPrice/ghostMannequinPrice")(db.sequelize, DataTypes);
db.ghostMannequinHowItWorks = require("../models/ghostMannequinHowItWorks/ghostMannequinHowItWorks")(db.sequelize, DataTypes);
db.ghostMannequinProjects = require("../models/ghostMannequinProjects/ghostMannequinProjects")(db.sequelize, DataTypes);
db.ghostMannequinTestimonial = require("../models/ghostMannequinTestimonial/ghostMannequinTestimonial")(db.sequelize, DataTypes);

db.imageMasking = require("../models/imageMasking/imageMasking")(db.sequelize, DataTypes);
db.imageMaskingPrice = require("../models/imageMaskingPrice/imageMaskingPrice")(db.sequelize, DataTypes);
db.imageMaskingHowItWorks = require("../models/imageMaskingHowItWorks/imageMaskingHowItWorks")(db.sequelize, DataTypes);
db.imageMaskingProjects = require("../models/imageMaskingProjects/imageMaskingProjects")(db.sequelize, DataTypes);
db.imageMaskingTestimonial = require("../models/imageMaskingTestimonial/imageMaskingTestimonial")(db.sequelize, DataTypes);

db.shadowCreation = require("../models/shadowCreation/shadowCreation")(db.sequelize, DataTypes);
db.shadowCreationPrice = require("../models/shadowCreationPrice/shadowCreationPrice")(db.sequelize, DataTypes);
db.shadowCreationHowItWorks = require("../models/shadowCreationHowItWorks/shadowCreationHowItWorks")(db.sequelize, DataTypes);
db.shadowCreationProjects = require("../models/shadowCreationProjects/shadowCreationProjects")(db.sequelize, DataTypes);
db.shadowCreationTestimonial = require("../models/shadowCreationTestimonial/shadowCreationTestimonial")(db.sequelize, DataTypes);

db.colorCorrection = require("../models/colorCorrection/colorCorrection")(db.sequelize, DataTypes);
db.colorCorrectionPrice = require("../models/colorCorrectionPrice/colorCorrectionPrice")(db.sequelize, DataTypes);
db.colorCorrectionHowItWorks = require("../models/colorCorrectionHowItWorks/colorCorrectionHowItWorks")(db.sequelize, DataTypes);
db.colorCorrectionProjects = require("../models/colorCorrectionProjects/colorCorrectionProjects")(db.sequelize, DataTypes);
db.colorCorrectionTestimonial = require("../models/colorCorrectionTestimonial/colorCorrectionTestimonial")(db.sequelize, DataTypes);

db.imageRestoration = require("../models/imageRestoration/imageRestoration")(db.sequelize, DataTypes);
db.imageRestorationPrice = require("../models/imageRestorationPrice/imageRestorationPrice")(db.sequelize, DataTypes);
db.imageRestorationHowItWorks = require("../models/imageRestorationHowItWorks/imageRestorationHowItWorks")(db.sequelize, DataTypes);
db.imageRestorationProjects = require("../models/imageRestorationProjects/imageRestorationProjects")(db.sequelize, DataTypes);
db.imageRestorationTestimonial = require("../models/imageRestorationTestimonial/imageRestorationTestimonial")(db.sequelize, DataTypes);

db.imageManipulation = require("../models/imageManipulation/imageManipulation")(db.sequelize, DataTypes);
db.imageManipulationPrice = require("../models/imageManipulationPrice/imageManipulationPrice")(db.sequelize, DataTypes);
db.imageManipulationHowItWorks = require("../models/imageManipulationHowItWorks/imageManipulationHowItWorks")(db.sequelize, DataTypes);
db.imageManipulationProjects = require("../models/imageManipulationProjects/imageManipulationProjects")(db.sequelize, DataTypes);
db.imageManipulationTestimonial = require("../models/imageManipulationTestimonial/imageManipulationTestimonial")(db.sequelize, DataTypes);

db.automotive = require("../models/automotive/automotive")(db.sequelize, DataTypes);
db.automotivePrice = require("../models/automotivePrice/automotivePrice")(db.sequelize, DataTypes);
db.automotiveHowItWorks = require("../models/automotiveHowItWorks/automotiveHowItWorks")(db.sequelize, DataTypes);
db.automotiveProjects = require("../models/automotiveProjects/automotiveProjects")(db.sequelize, DataTypes);
db.automotiveTestimonial = require("../models/automotiveTestimonial/automotiveTestimonial")(db.sequelize, DataTypes);

db.reflectionCreation = require("../models/reflectionCreation/reflectionCreation")(db.sequelize, DataTypes);
db.reflectionCreationPrice = require("../models/reflectionCreationPrice/reflectionCreationPrice")(db.sequelize, DataTypes);
db.reflectionCreationHowItWorks = require("../models/reflectionCreationHowItWorks/reflectionCreationHowItWorks")(db.sequelize, DataTypes);
db.reflectionCreationProjects = require("../models/reflectionCreationProjects/reflectionCreationProjects")(db.sequelize, DataTypes);
db.reflectionCreationTestimonial = require("../models/reflectionCreationTestimonial/reflectionCreationTestimonial")(db.sequelize, DataTypes);

db.vector = require("../models/vector/vector")(db.sequelize, DataTypes);
db.vectorPrice = require("../models/vectorPrice/vectorPrice")(db.sequelize, DataTypes);
db.vectorHowItWorks = require("../models/vectorHowItWorks/vectorHowItWorks")(db.sequelize, DataTypes);
db.vectorProjects = require("../models/vectorProjects/vectorProjects")(db.sequelize, DataTypes);
db.vectorTestimonial = require("../models/vectorTestimonial/vectorTestimonial")(db.sequelize, DataTypes);

module.exports = db;
