const sequelize = require('sequelize');
const connection = require('../database/connection');

const Admin = connection.define(
    'admin',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

Admin.sync();

module.exports = Admin;
