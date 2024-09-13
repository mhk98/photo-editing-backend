const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const Clients = sequelize.define("Clients", {
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
  });

  return Clients;
};
