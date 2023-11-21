const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

let db = null;

// sqlite3 를 활용해 파일에 저장된 데이터베이스를 불러옴ㄴ
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