const dbPool = require("../config/poolConfig");

module.exports = {
    infoDB(arr, cb) {
        const sql = "SELECT * FROM info";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
    operateDB(sql, arr, cb) {
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    },
}