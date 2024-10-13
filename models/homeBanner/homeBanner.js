const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const HomeBanner = sequelize.define("HomeBanner", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,

    },

    image1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return HomeBanner;
};
