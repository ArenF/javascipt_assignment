
const err = document.querySelector("#error-message");

window.onload = function() {
    err.style.display = 'none';
}

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const login = document.getElementById("login-form");

login.addEventListener("submit", (event) => {
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
    .then(json => {
        if (json.login === true) {
            alert("로그인 되었습니다.");
            location.href = "/";
        } else {
            err.style.display = 'block';
        }
    })
    .catch(error => {
        err.style.display = 'block';
    });
});