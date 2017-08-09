'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const menu_card = sequelize.define('menu_card', {
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

menu_card.sync();

module.exports = menu_card;
