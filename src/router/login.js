const express = require("express");
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");

const db = new Map();
const USER_COOKIE_KEY = 'USER'; 

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.post("/", (req, res) => {
    const {username, password } = req.body;
    const user = db.get("username");

    if (!user) {
        res.status(400).send(`not registered username: ${username}`);
        return;
    }

    if (password !== user.password) {
        res.status(400).send(`incorrect password`);
        return;
    }

    res.cookie(USER_COOKIE_KEY, JSON.stringify(user));
    res.redirect("/");
});

router.post("/signup", (req, res) => {

});

module.exports = router;