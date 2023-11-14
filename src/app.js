//서버 JS 파일
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

server.listen(port, () => {
    console.log(`it's running on http://localhost:3000`);
});

