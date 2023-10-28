const {Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize('kitchenapp', 'nkechianyanwu', '', {
    host: 'localhost',
    dialect: 'postgres'
})