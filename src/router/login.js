const express = require("express");

const router = express.Router();
const path = require("path");

const query = require("../public/js/query");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.post("/", (req, res) => {
    const { id, pass } = req.body;

    const user = {        
        id,
        pass
    }
    
    query.serialize(() => {
        const selectQuery = "select username, password from user where username = ? AND password = ?;";

        query.get(selectQuery, [`${id}`, `${pass}`], (err, row) => {

            // 입력 중에 오류나 로그인이 발생하면 warning_message 를 찍음
            if (row === undefined || err) {
                if (err) {
                    console.error(err.message);
                }

                // res.redirect("/login");
                res.send('<script>alert("아이디 또는 비밀번호가 잘못되었습니다.");location.href="/login"</script>');
                return;
                
            } else {
                req.session.loggedIn = true;
                res.send(`<script>window.location.href = "/";</script>`);
            }
        });
    });
});

module.exports = router;