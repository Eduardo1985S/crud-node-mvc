const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((users) => {
        res.render('index', { users });
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.updateUser(userId, updatedUser, () => {
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};
