const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const ClippingPathHowItWorks = sequelize.define("ClippingPathHowItWorks", {
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
    
  });

  return ClippingPathHowItWorks;
};
