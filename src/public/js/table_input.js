
const button = document.getElementById("submit_button");

const nameInput = document.getElementsByName("name")[0];
const codeInput = document.getElementsByName("student_code")[0];
const korInput = document.getElementsByName("sub_korean")[0];
const engInput = document.getElementsByName("sub_english")[0];
const mathInput = document.getElementsByName("sub_math")[0];

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hello world!");

    const stdName = nameInput.value;
    const stdCode = codeInput.value;
    const scrKor = korInput.value;
    const scrEng = engInput.value;
    const scrMath = mathInput.value;

    const user = {
        stdName, stdCode, scrKor, scrEng, scrMath
    };

    const formData = new FormData();
    formData.append("stdName", stdName);
    formData.append("stdCode", stdCode);
    formData.append("scrKor", scrKor);
    formData.append("scrEng", scrEng);
    formData.append("scrMath", scrMath);
    const payload = new URLSearchParams(formData);

    fetch("/table", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload
    })
    .then(response => response.json())
    .then(data => {
        if(data.message = "ok")
        location.href = "/table";
    })
    .catch(err => console.log(err));
});

button.addEventListener("submit", button);

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