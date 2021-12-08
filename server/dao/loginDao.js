const dbPool = require("../config/poolConfig");

module.exports = {
    loginDB(arr, cb) {
        const sql = "SELECT * FROM user WHERE username = ? and password = ?";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
            console.log("loginDB" + data);
        });
    },
    operateDB(arr, cb) {
        var name = arr[0];
        var selSql = 'SELECT * FROM data WHERE username = ' + '\'' + name + '\'';
        console.log(selSql);
        dbPool.connect(selSql, [], function (err, data) {
            if (err) {
                cb(err, data);
            }
            else {
                if (data.length === 0) {
                    const sql = 'INSERT INTO data SET username = ?, time = ?';
                    dbPool.connect(sql, arr, function (err, data) {
                        cb(err, data);
                    });
                } else {
                    const sql = "UPDATE data SET time = ? WHERE username = ?";
                    arr.reverse();
                    dbPool.connect(sql, arr, function (err, data) {
                        cb(err, data);
                    });
                }
            }
        });
    }
}