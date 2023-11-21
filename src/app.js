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
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const server = http.createServer(app);
const port = 3000;

// 서버 설정  ex*) 쿠키, 프론트엔드 폴더 설정, 세션 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));
app.set('views', path.join(__dirname + "./views"));

server.listen(port, () => {
    console.log(`it's running on http://localhost:${port}`);
});

const indexRouter = require("./router/index");
const loginRouter = require("./router/login");
const signUpRouter = require("./router/signup");
const tableRouter = require("./router/table");

// 라우터 설정
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use('/signup', signUpRouter);
app.use('/table', tableRouter);


//데이터베이스 설정

const query = require('./public/js/query');

query.serialize(() => {
    query.each("CREATE TABLE IF NOT EXISTS user(id integer primary key autoincrement, username text, password text)");

    // 테스트 코드용 데이터베이스 전체 조회

    // query.all("SELECT * FROM user", [], (err, rows) => {
    //     if (err) {
    //         console.error(err.message);
    //     } else {
    //         rows.forEach((row) => {
    //             console.log(`name : ${row.username} \npassword : ${row.password}`);
    //         });
    //     }
    // });
});

