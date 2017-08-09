'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const menu_config = sequelize.define('menu_config', {
    area: {
      type: Sequelize.STRING,
      allowNull: false
    },
    main_class: {
      type: Sequelize.STRING,
      allowNull: true
    },
    sub_class: {
      type: Sequelize.STRING,
      allowNull: true
    },
    enabled: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }
);

menu_config.sync();

module.exports = menu_config;
