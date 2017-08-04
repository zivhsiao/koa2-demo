'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const MenuTop = sequelize.define('menu_top', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    visible: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    }
  }
);

MenuTop.sync();

module.exports = MenuTop;
