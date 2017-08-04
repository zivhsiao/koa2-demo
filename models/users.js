'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Users = sequelize.define('users', {
    fullname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    admin: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
  }
);

Users.sync();

module.exports = Users;
