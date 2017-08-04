'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Footer = sequelize.define('footer', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tel: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fax: {
      type: Sequelize.STRING,
      allowNull: true
    },
    service_email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    visible: {
      type: Sequelize.INTEGER(1),
      defaultValue: 1
    }
  }
);

Footer.sync();

module.exports = Footer;
