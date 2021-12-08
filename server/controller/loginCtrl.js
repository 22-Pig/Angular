const loginDao = require("../dao/loginDao");

module.exports = {

    login: (req, resp) => {
        let username = req.body.userName;
        let password = req.body.password;

        let loginArr = [username, password];

        var recordArr = [username, new Date(Date.now())];
        // var recordArr = [new Date(Date.now()), username];
        console.log(loginArr);
        loginDao.loginDB(loginArr, function (err, data) {
            if (err) {
                return;
            }
            else {
                console.log("loginCtrl:" + data.length);
                data = JSON.stringify(data);
                // console.log(data);
                data = JSON.parse(data);
                // console.log(data);
                if (data.length == 1) {
                    loginRecord(recordArr);
                    resp.send({ succ: true, identity: data[0].message });
                } else {
                    resp.send({ succ: false });
                }
            }
        });
    }
}

function loginRecord(recordArr) {
    console.log(recordArr);
    loginDao.operateDB(recordArr, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            if (data) {
                console.log('operateDB' + data);
            }
        }
    });
}
