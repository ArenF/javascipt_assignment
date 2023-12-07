
const button = document.getElementById("submit_button");

const formTable = document.querySelector("#input_table");
const nameInput = document.getElementsByName("name")[0];
const codeInput = document.getElementsByName("student_code")[0];
const korInput = document.getElementsByName("sub_korean")[0];
const engInput = document.getElementsByName("sub_english")[0];
const mathInput = document.getElementsByName("sub_math")[0];

const HIDDEN_CLASSNAME = "hidden";

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hello world!");

    formTable.classList.add(HIDDEN_CLASSNAME);

    const stdName = nameInput.value;
    const stdCode = codeInput.value;
    const scrKor = korInput.value;
    const scrEng = engInput.value;
    const scrMath = mathInput.value;

    localStorage.setItem("stdName", stdName);
    localStorage.setItem("stdCode", stdCode);
    localStorage.setItem("scrKor", scrKor);
    localStorage.setItem("scrEng", scrEng);
    localStorage.setItem("scrMath", scrMath);
});

button.addEventListener("submit", button);