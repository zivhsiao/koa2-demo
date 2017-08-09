'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const menuMain = sequelize.define('menuMain', {
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    path: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    icon: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    area: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    weight: {
      type:Sequelize.INTEGER,
      defaultValue: 1
    },
    listType: {
      type: Sequelize.ENUM('one_page','list', 'card', 'picture'),
      allowNull: true
    },
    enabled: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }
);

menuMain.sync();

module.exports = menuMain;
