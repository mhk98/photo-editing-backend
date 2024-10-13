const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const vectorProjects = sequelize.define("vectorProjects", {
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

  return vectorProjects;
};
