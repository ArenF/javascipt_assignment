
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

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const login_btn = document.getElementsByClassName("login-btn")[0];

login_btn.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("로그인 실행");
    const id = usernameInput.value;
    const pass = passwordInput.value;

    const user = {
        id, pass
    };

    const formData = new FormData();
    formData.append("id", id);
    formData.append("pass", pass);
    const payload = new URLSearchParams(formData);

    fetch("/login", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
});