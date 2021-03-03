const User = require('../models/User');
const Loan = require('../models/Loan');

exports.showAll = (req, res) => {
    User.findAll()
        .then((users) => res.status(200).json(users))
        .catch((err) =>
            res.status(400).json({ message: 'Error listing users' })
        );
};

exports.showOne = (req, res) => {
    const { id } = req.params;

    User.findByPk(id)
        .then((user) => res.status(200).json(user))
        .catch((err) =>
            res.status(400).json({ message: 'Error finding user' })
        );
};

exports.create = (req, res) => {
    const { name, cpf } = req.body;

    User.create({ name, cpf })
        .then(() => res.status(201).json({ message: 'User created' }))
        .catch(() => res.status(400).json({ message: 'Error creating user' }));
};

exports.delete = (req, res) => {
    const { id } = req.params;

    User.destroy({ where: { id } })
        .then(() => res.status(200).json({ message: 'User deleted' }))
        .catch(() => res.status(400).json({ message: 'Error deleting user' }));
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { name, cpf } = req.body;

    User.update({ name, cpf }, { where: { id } })
        .then(() => res.status(200).json({ message: 'User updated' }))
        .catch(() => res.status(400).json({ message: 'Error updating user' }));
};

exports.showAllLoans = (req, res) => {
    const { id } = req.params;

    User.findAll({ where: { id }, include: Loan })
        .then((loans) => res.status(200).json(loans))
        .catch((err) =>
            res.status(400).json({ message: 'error listing loans from user' })
        );
};

exports.showOneLoan = (req, res) => {
    const { id, idLoan } = req.params;

    User.findOne({
        where: { id },
        include: { model: Loan, where: { id: idLoan } },
    })
        .then((loan) => res.status(200).json(loan))
        .catch(() =>
            res.status(400).json({ message: 'error listing loan from user' })
        );
};

exports.updateLoan = (req, res) => {
    const { id, idLoan } = req.params;

    User.findOne({
        where: { id },
        include: { model: Loan, where: { id: idLoan } },
    })
        .then((user) => {
            user.loan.update({ returned: true, returnedDate: Date.now() });
            res.status(200).json({ message: 'Loaded book returned' });
        })
        .catch((err) => res.status(400).json({ message: 'Error updating loan', err }));
};
