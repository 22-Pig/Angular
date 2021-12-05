const infoDao = require("../dao/infoDao");

var sql = '';

module.exports = {
    info: (req, resp) => {
        infoDao.infoDB(function (err, data) {
            if (err) {
                return;
            }
            else {
                if (data) {
                    resp.send(data);
                } else {
                }
            }
        });
    },
    toggle: function (req, resp) {
        var toggleId = req.body.id;
        var status = req.body.status;
        // console.log(toggleId);
        // console.log(status);
        updateValue(status, toggleId);
        resp.send({
            success: true,
            data: {
                id: toggleId,
                value: status
            }
        });
    },

}

function updateValue(value, id) {
    sql = 'UPDATE info SET value = ' + value + ' WHERE id = \'' + id + '\'';
    infoDao.operateDB(sql, [], function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
    });
}