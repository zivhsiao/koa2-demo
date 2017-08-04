'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const ScrollImg = sequelize.define('scroll_img', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,

    },
    admin: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
    }
  }
);

ScrollImg.sync();

module.exports = ScrollImg;
