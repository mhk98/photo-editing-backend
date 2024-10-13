const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const ImageMasking = sequelize.define("ImageMasking", {
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
    
  });

  return ImageMasking;
};
