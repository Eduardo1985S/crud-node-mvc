const db = require('../config/db');

const User = {
    getAllUsers: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    getUserById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },

    addUser: (data, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    updateUser: (id, data, callback) => {
        const sql = 'UPDATE users SET ? WHERE id = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    deleteUser: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = User;
