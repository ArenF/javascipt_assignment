
window.onload = function() {
    // function login_verify() {
    //     fetch("/login", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((response) => response.json())
    //     .then(data => {
    //         if (data.xxx.loggedIn) {
    //             location.href = '/';
    //         }
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }
}

const username = document.getElementById("username");
const password = document.getElementById("password");

function login_verify() {
    console.log("로그인 실행");
    fetch("/login", {
        method: 'POST',
        body: {
            id: username.value,
            pass: password.value
        }
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        console.log(response.json());
    });
}