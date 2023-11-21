//서버 JS 파일
// Node.js 를 사용하여 Express 라는 서버 모듈을 사용합니다.
// 서버를 작동하는 방법은 Node.js 프로그램을 다운받고
// vscode에서 Ctrl + Shift + ` 를 누르면 터미널이 생성됩니다.
// 해당 터미널에서 npm run start 라고 입력하면 서버가 생성됩니다.
const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sqlite3 = require('sqlite3').verbose();

app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);
const port = 3000;

const loginRouter = require("./router/login");
const signUpRouter = require("./router/signup"); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    // app.js 가 있는 위치에서 views 폴더 안 index.html 파일을 클라이언트에게 보낸다.
    // 즉, index.html 파일을 서버에서 실행시킨다.
    res.sendFile(__dirname + "/views/index.html");

});

server.listen(port, () => {
    console.log(`it's running on http://localhost:${port}`);
});

app.use("/login", loginRouter);
app.use('/signup', signUpRouter);

// sql 데이터베이스 파일이 없다면 생성하기
// sql 데이터베이스를 건드려 login.js 에서는 조회를, signup.js 에서는 삽입을
// sql 데이터베이스를 건드리는 query.js 를 사용할 것

// const query = require('./public/js/query');

// query.all(`SELECT * FROM student`, [], (err, rows) => {
//     if (err) {
//         throw err;
//     }
//     rows.forEach((row) => {
//         console.log(row);
//     });
// });