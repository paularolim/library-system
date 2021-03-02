const sequelize = require('sequelize');
const connection = require('../database/connection');

const Book = require('./Book');
const User = require('./User');

const Loan = connection.define(
    'loan',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        loanDate: {
            type: sequelize.DATE,
            allowNull: false,
        },
        devolutionDate: {
            type: sequelize.DATE,
            allowNull: false,
        }
    },
    { timestamps: false }
);

Loan.belongsTo(Book);
Book.hasMany(Loan);

Loan.belongsTo(User);
User.hasOne(Loan);

Loan.sync();

module.exports = Loan;
