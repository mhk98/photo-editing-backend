const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const HomeSlider = sequelize.define("HomeSlider", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    image1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image10: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return HomeSlider;
};
