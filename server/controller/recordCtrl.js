const recordDao = require("../dao/recordDao");

module.exports = {
    searchAllRecord: (req, resp) => {
        recordDao.searchAllRecordDB(function (err, data) {
            if (err) {
                return;
            } else {
                if (data) {
                    // data = JSON.stringify(data);
                    // data = JSON.parse(data);
                    // console.log('date' + data);
                    resp.send(data);
                } else {
                }
            }
        });
    }

}