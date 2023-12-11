//서버 라우터 설정
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    // app.js 가 있는 위치에서 views 폴더 안 index.html 파일을 클라이언트에게 보낸다.
    // 즉, index.html 파일을 서버에서 실행시킨다.
    // res.sendFile(path.join(__dirname, "../views/index.html"));
    res.render('index');
});

module.exports = router;