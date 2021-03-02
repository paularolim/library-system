const express = require('express');

const app = express();

const loanRoutes = require('./routes/loanRoutes');
const booksRoutes = require('./routes/booksRoutes');
const usersRoutes = require('./routes/usersRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/loans', loanRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/admins', adminRoutes);

module.exports = app;
