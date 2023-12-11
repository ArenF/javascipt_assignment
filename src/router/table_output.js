const express = require('express');
const path = require('path');
const query = require('../public/js/query');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/table_output.html"));
});

router.get("/getTable", (req, res) => {
    if (req.session.user === undefined) {
        res.status(200).send({isLogin: false});
        return;
    }

    const user = req.session.user;

    query.serialize(() => {
        const getIDSQL = `SELECT id FROM user WHERE username = ? AND password = ?`;

        query.get(getIDSQL, [`${user.username}`, `${user.password}`], (err, row) => {
            if (err) {
                res.status(403).send({
                    isLogin: true,
                    body: "error"
                });
                return;
            }
            
            const selectSQL = `SELECT name, code, kor, eng, math FROM grades WHERE user_id = ?`;

            query.all(selectSQL, [`${row.id}`], (error, rows) => {
                if (error) {
                    res.status(403).send({
                        isLogin: true,
                        body: "there has no dataes"
                    });
                    return;
                }

                const body = [];

                rows.forEach((row) => {
                    const data = {
                        name: row.name,
                        code: row.code,
                        kor: row.kor,
                        eng: row.eng,
                        math: row.math
                    };
                    body.push(data);
                });

                res.status(200).send({
                    isLogin: true,
                    body: body
                });
                return;
            });
        });
    });
});

module.exports = router;