const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

function getDB() {
    const dbPath = path.resolve(__dirname, "../../db/MyDBLite.db");

    if (fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, "");
    }

    let db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error(err.message);
            console.error(dbPath);
        } else {
            console.log(`Connected to the database.`);
        }
    });

    

    return db;
}



module.exports = getDB();