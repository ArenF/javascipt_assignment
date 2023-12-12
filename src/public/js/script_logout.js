function click_to_logout() {
    fetch("/logout", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        location.href = result.location;
    })
    .catch(err => console.log(err.message));

    alert("로그아웃 되었습니다.");
}