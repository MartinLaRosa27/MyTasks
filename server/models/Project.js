const Sequelize = require("sequelize");
const dataBase = require("../dataBase.js");

const Project = dataBase.define("project", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [5, 90],
        msg: "The project name must have between 5 and 90 characters",
      },
      notEmpty: {
        args: true,
        msg: "The project name cannot be empty",
      },
    },
  },
});

module.exports = Project;
