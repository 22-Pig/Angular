const dbPool = require("../config/poolConfig");

module.exports = {
    searchAllRecordDB(arr, cb) {
        const sql = "SELECT * FROM data";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
        });
    }
}