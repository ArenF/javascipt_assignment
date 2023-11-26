
const button = document.getElementById("submit_button");

const nameInput = document.getElementsByName("name")[0];
const codeInput = document.getElementsByName("student_code")[0];
const korInput = document.getElementsByName("sub_korean")[0];
const engInput = document.getElementsByName("sub_english")[0];
const matInput = document.getElementsByName("sub_math")[0];

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hello world!");
});