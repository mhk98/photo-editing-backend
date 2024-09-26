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
db.clippingPathPrice = require("../models/clippingPathPrice/clippingPathPrice")(db.sequelize, DataTypes);
db.clippingPath = require("../models/clippingPath/clippingPath")(db.sequelize, DataTypes);
db.clippingPathHowItWorks = require("../models/clippingPathHowItWorks/clippingPathHowItWorks")(db.sequelize, DataTypes);
db.clippingPathProjects = require("../models/clippingPathProjects/clippingPathProjects")(db.sequelize, DataTypes);
db.clippingPathTestimonial = require("../models/clippingPathTestimonial/clippingPathTestimonial")(db.sequelize, DataTypes);

module.exports = db;
