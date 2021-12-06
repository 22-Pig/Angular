const loginDao = require("../dao/loginDao");

module.exports = {

    login: (req, resp) => {
        let username = req.body.userName;
        let password = req.body.password;

        let loginArr = [username, password];
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
                    resp.send({ succ: true, identity: data[0].message });
                } else {
                    resp.send({ succ: false });
                }
            }
        });
    }
}