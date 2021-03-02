const express = require('express');

const app = express();

const booksRoutes = require('./routes/booksRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/books', booksRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;
