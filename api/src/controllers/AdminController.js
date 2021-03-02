const bcrypt = require('bcrypt');

const Admin = require('../models/Admin');

exports.showOne = (req, res) => {
    const { id } = req.params;

    Admin.findByPk(id)
        .then((admin) => res.status(200).json(admin))
        .catch(() => res.status(400).json({ message: 'Error showing admin' }));
};

exports.create = (req, res) => {
    const salt = bcrypt.genSaltSync(10);

    const { name, email } = req.body;
    const password = bcrypt.hashSync(req.body.password, salt);

    Admin.create({ name, email, password })
        .then(() => res.status(201).json({ message: 'Admin created' }))
        .catch(() => res.status(400).json({ message: 'Error creating admin' }));
};
