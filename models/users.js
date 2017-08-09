'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Users = sequelize.define('users', {
    fullname: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    admin: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }
);

Users.sync();

module.exports = Users;
