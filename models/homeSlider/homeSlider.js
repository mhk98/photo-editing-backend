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
    image6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return HomeSlider;
};
