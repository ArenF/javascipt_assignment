const express = require("express");

const router = express.Router();
const path = require("path");

const cookieParser = require("cookie-parser");
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
            // // 로그인 창의 input 에 입력했던 데이터를 모두 초기화
            // const usernameInput = document.getElementById("username");
            // const passwordInput = document.getElementById("password");

            // usernameInput.value = "";
            // passwordInput.value = "";

            // 입력 중에 오류나 로그인이 발생하면 warning_message 를 찍음
            if (row === undefined || err) {
                if (err) {
                    console.error(err.message);
                }

                // res.redirect("/login");
                res.send('<script>alert("아이디 또는 비밀번호가 잘못되었습니다.");location.href="/login"</script>');
                return;
            }
        });
    });

    req.session.loggedIn = true;
    res.redirect("/");
});

module.exports = router;