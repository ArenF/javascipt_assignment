const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "../views/exchange.html"));
    res.render("exchange", {
        login: !req.session.loggedIn
    });
});

module.exports = router;