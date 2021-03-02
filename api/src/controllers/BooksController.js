const Book = require('../models/Book');

exports.showAll = (req, res) => {
    Book.findAll()
        .then((books) => res.status(200).json(books))
        .catch((err) =>
            res.status(400).json({ message: 'Error listing books' })
        );
};

exports.showOne = (req, res) => {
    const { id } = req.params;

    Book.findByPk(id)
        .then((book) => res.status(200).json(book))
        .catch((err) =>
            res.status(400).json({ message: 'Error finding book' })
        );
};

exports.create = (req, res) => {
    const { title, isbn } = req.body;

    Book.create({ title, isbn })
        .then(() => res.status(201).json({ message: 'Book created' }))
        .catch((err) =>
            res.status(400).json({ message: 'Error creating book' })
        );
};

exports.delete = (req, res) => {
    const { id } = req.params;

    Book.destroy({ where: { id } })
        .then(() => res.status(200).json({ message: 'Book deleted' }))
        .catch((err) =>
            res.status(400).json({ message: 'Error deleting book' })
        );
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { title, isbn } = req.body;

    Book.update({ title, isbn }, { where: { id } })
        .then(() => res.status(200).json({ message: 'Book updated' }))
        .catch(() => res.status(400).json({ message: 'Error updating book' }));
};
