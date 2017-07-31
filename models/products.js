'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Products = sequelize.define('products', {
    c_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    enabled: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: 1
    },
    start_deate:{
        type: Sequelize.DATE,
        allowNull: true
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    create_date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

Products.sync(); 

module.exports = Products;