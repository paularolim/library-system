const sequelize = require('sequelize');
const connection = require('../database/connection');

const User = connection.define(
    'user',
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        cpf: {
            type: sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

User.sync();

module.exports = User;
