const dbPool = require("../config/poolConfig");

module.exports = {
    addDevDB(arr, cb) {
        dbPool.connect('SELECT max(id) + 1 AS id FROM info', [], function (err, data) {
            if (err) {
                cb(err, data);
            }
            else {
                console.log(data);
                arr[0] = data[0].id;
                const sql = "INSERT INTO info SET id = ?, type = ?, name = ?,value = ?, descr = ?";
                console.log(arr);
                dbPool.connect(sql, arr, function (err, data) {
                    cb(err, data);
                });
            }
        });
    },
    deleteDevDB(arr, cb) {
        const sql = "DELETE FROM info WHERE id = ?";
        dbPool.connect(sql, arr, (err, data) => {
            cb(err, data);
        });
    },
    updateDevDB(arr, cb) {
        const sql = "UPDATE info SET type = ?, name = ?, descr = ? WHERE id = ?";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    searchDevDB(arr, cb) {
        const sql = "SELECT * FROM info WHERE id = ?";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    searchAllDevDB(arr, cb) {
        const sql = "SELECT * FROM info ORDER BY id";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    }
}