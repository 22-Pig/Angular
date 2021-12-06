const dbPool = require("../config/poolConfig");

module.exports = {
    addUserDB(arr, cb) {
        const sql = "INSERT INTO user VALUES (?,?,?,?)";
        console.log(arr);
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    deleteUserDB(arr, cb) {
        let sql = "DELETE FROM user WHERE username = ?";
        dbPool.connect(sql, arr, (err, data) => {
            cb(err, data);
        });
    },
    updateUserDB(arr, cb) {
        const sql = "UPDATE user SET id = ?, password = ?, message = ? WHERE username = ?";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    searchUserDB(arr, cb) {
        const sql = "SELECT * FROM user WHERE username = ?";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    searchAllUserDB(arr, cb) {
        const sql = "SELECT * FROM user";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    alterUserDB(arr, cb) {
        console.log(arr);
        const sql = "UPDATE user SET password = ? WHERE username = ?";
        dbPool.connect(sql, arr, function (err, data) {
            // console.log(err);
            // console.log(data);
            cb(err, data);
        });
    },
}