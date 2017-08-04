'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const MenuSide = sequelize.define('menu_side', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    visible:{
      type: Sequelize.INTEGER(1),
      defaultValue: 1
    }
  }
);

MenuSide.sync();

module.exports = MenuSide;
