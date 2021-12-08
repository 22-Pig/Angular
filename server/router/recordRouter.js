// 拦截请求，分发任务
const express = require("express");
const recordCtrl = require("../controller/recordCtrl");
const router = express.Router();

// 查询所有
router.get("/searchAllRecord", recordCtrl.searchAllRecord);


module.exports = router;