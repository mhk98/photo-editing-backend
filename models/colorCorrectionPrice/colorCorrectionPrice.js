const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const ColorCorrectionPrice = sequelize.define("ColorCorrectionPrice", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feature1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feature2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feature3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feature4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ColorCorrectionPrice;
};
