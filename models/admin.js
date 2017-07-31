'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Admin = sequelize.define('admin', {
    account: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
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

Admin.sync(); 

module.exports = Admin;