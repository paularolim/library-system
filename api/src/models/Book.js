const sequelize = require('sequelize');
const connection = require('../database/connection');
const Loan = require('./Loan');

const Book = connection.define(
    'book',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: sequelize.STRING,
            allowNull: false,
        },
        isbn: {
            type: sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

Book.sync();

module.exports = Book;
