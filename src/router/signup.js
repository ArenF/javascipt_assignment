const express = require('express');
const router = express.Router();
const path = require('path');
const { use } = require('./login');
const { send } = require('process');

const db = new Map();
const USER_COOKIE_KEY = 'USER';

router.post("/", (req, res) => {
    const { username, name, password } = req.body;
    const exists = db.get(username);

    if (exists) {
        res.status(400).send(`duplicate username : ${username}`);
        return;
    }

    const newUser = {
        username,
        name,
        password,
    };
    db.set(username, newUser);

    res.cookie(USER_COOKIE_KEY, JSON.stringify(newUser));
    res.redirect('/');
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
});

module.exports = router;