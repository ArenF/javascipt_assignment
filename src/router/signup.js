const express = require('express');
const router = express.Router();
const path = require('path');
const USER_COOKIE_KEY = 'USER';
const query = require('../public/js/query');

router.post("/", (req, res) => {
    const {username, password} = req.body;
    
    query.serialize(() => {
        const registerQuery = `insert into user(username, password) values('${username}', '${password}')`;

        query.run(registerQuery, (err) => {
            if (err) {
                console.error(err.message);
                return;
            } else {
                console.log(`${username}님이 회원가입되었습니다.`);
            }
        });
    });

    res.redirect('/login');
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/signup.html"));

});

module.exports = router;