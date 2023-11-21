const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

let db = null;

function getDB() {
    const dbPath = path.resolve(__dirname, "./../../db/MyDBLite.db");

    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, "");
    }

    db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error(err.message);
            console.error(dbPath);
        } else {
            console.log("Connected to the DB");
        }
    });

    return db;
}

module.exports = getDB();