// 서버 라우터 설정
const express = require("express");
const router = express.Router();
const path = require("path");

// 데이터베이스
const query = require("../public/js/query");

// /login 링크에 post 와 get 방식을 모두 사용

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.post("/", (req, res) => {

    console.log(req.body);
    const { id, pass } = req.body;

    query.serialize(() => {
        const selectQuery = "select username, password from user where username = ? AND password = ?;";

        query.get(selectQuery, [`${id}`, `${pass}`], (err, row) => {

            // 입력 중에 오류나 로그인이 발생하면 warning_message 를 찍음
            if (row === undefined || err) {
                if (err) {
                    console.error(err.message);
                }

                // console.log(`username : ${id}\npassword : ${pass}`);
                
                const user = {
                    id, pass
                };

                // res.redirect("/login");
                res.status(200).json(user);
                
                // res.send('<script>alert("아이디 또는 비밀번호가 잘못되었습니다.");location.href="/login"</script>');
                return;
                
            } else {
                req.session.loggedIn = true;
                req.session.user = user;
                res.send(`<script>window.location.href = "/";</script>`);
            }
        });
    });
});

module.exports = router;