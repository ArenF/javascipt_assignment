
const button = document.getElementById("submit_button");

const formTable = document.querySelector("#input_table");
const nameInput = document.getElementsByName("name")[0];
const codeInput = document.getElementsByName("student_code")[0];
<<<<<<< HEAD
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
=======
const subjectInputs = document.getElementsByClassName("subject");
// const korInput = document.getElementsByName("sub_korean")[0];
// const engInput = document.getElementsByName("sub_english")[0];
// const matInput = document.getElementsByName("sub_math")[0];

for (i = 0; i < subjectInputs.length; i++) {
    let subInput = subjectInputs[i];

    subInput.addEventListener("change", () => {
        const val = subInput.value;
        subInput.value = val.toUpperCase();
    });
}

button.addEventListener("click", (event) => {
    event.preventDefault();


    // 초기화
    codeInput.value = '';
    nameInput.value = '';
    for (i = 0; i < subjectInputs.length; i++) {
        subjectInputs[i].value = '';
    }
});
>>>>>>> 194341fe5539221cf6471cedae13193559a2b82c
