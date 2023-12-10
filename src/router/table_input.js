const express = require('express');
const path = require('path');
const query = require('../public/js/query');
const router = express.Router();


router.get("/", (req, res) => {
    if (req.session.user == undefined) {
        res.send(`<script>alert("로그인이 필요합니다."); location.href = "/login"</script>`);
        return;
    }

    res.sendFile(path.join(__dirname, "../views/table_input.html"));
});

router.post("/", (req, res) => {
    
    const { stdName, stdCode, scrKor, scrEng, scrMath } = req.body;

    const user = req.session.user;

    console.log(req.body);
    console.log(req.session.user);

    query.serialize(() => {
        const makingTable = `CREATE TABLE IF NOT EXISTS grades(name text not null, code text not null, kor integer not null, eng integer not null, math integer not null, user_id integer not null, constraint userId_fk foreign key(user_id) references user(id));`
        query.run(makingTable);
    });


    query.serialize(() => {
        const getUserIdSQL = `SELECT id FROM user WHERE username LIKE ?`;
        let user_id = 0;

        query.get(getUserIdSQL, [`${user.username}`], (err, row) => {
            if (!err) {
                user_id = row.id;
                console.log(`row : ${row.id}`);
                console.log(`id : ${user_id}`);
            } else {
                res.status(403).send({ message: "It works error when calling databases" });
            }

            const insertGradesSQL = `INSERT INTO grades(name, code, kor, eng, math, user_id) VALUES(?, ?, ?, ?, ?, ?);`;

            query.run(insertGradesSQL, [`${stdName}`, `${stdCode}`, `${scrKor}`, `${scrEng}`, `${scrMath}`, `${user_id}`], (err) => {
                if (err) {
                    res.status(403).send({ message: "there has no databases" });
                    return;
                }
                // 오류가 발생하지 않았을 때
                if (user_id === null) {
                    console.log("user id is null");
                    res.status(403).send({ message: "user id is null" });
                    return;
                }
                res.status(200).send({ message: 'ok' });
            });
        });
    });

});

module.exports = router;