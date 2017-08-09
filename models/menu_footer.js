'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const menu_carouse = sequelize.define('menu_carouse', {
    item_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    enabled: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }
);

menu_carouse.sync();

module.exports = menu_carouse;
