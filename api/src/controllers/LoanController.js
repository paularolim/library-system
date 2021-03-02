const Loan = require('../models/Loan');

exports.showAll = (req, res) => {
    Loan.findAll()
        .then((loans) => res.status(200).json(loans))
        .catch((err) =>
            res.status(400).json({ message: 'Error listing loans' })
        );
};

exports.create = (req, res) => {
    const { loanDate, devolutionDate, bookId, userId } = req.body;

    Loan.create({ loanDate, devolutionDate, bookId, userId })
        .then(() => res.status(200).json({ message: 'loan created' }))
        .catch(() => res.status(400).json({ message: 'error creating loan' }));
};
