const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const ImageManipulationPrice = sequelize.define("ImageManipulationPrice", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,

    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    feature1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return ImageManipulationPrice;
};
