const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const News = sequelize.define("News", {
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
  });

  return News;
};
