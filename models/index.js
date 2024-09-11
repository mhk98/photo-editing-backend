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

module.exports = db;
