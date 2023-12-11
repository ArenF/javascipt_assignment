
const tableBody = document.getElementById("table_output");

window.onload = () => {

    fetch("/table/getTable", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        if (result.isLogin === false) {
            alert("로그인이 필요합니다.");
            location.href = "/login";
            return;
        }

        const body = result.body;

        body.forEach(element => {
            outputTable(element.name, element.code, element.kor, element.eng, element.math);
        });
    })
    .catch(err => console.error(err.message));
    // outputTable("홍길동", "13245454", 80, 85, 75);
}

function outputTable(name, code, kor, eng, math) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdCode = document.createElement("td");
    const tdKor = document.createElement("td");
    const tdEng = document.createElement("td");
    const tdMath = document.createElement("td");
    const tdAvg = document.createElement("td");
    const tdGr = document.createElement("td");

    const sum = kor + eng + math;
    const avg = (sum / 3).toFixed(2);

    tdCode.className = "num";
    tdGr.className = "grade";

    tdName.innerText = name;
    tdCode.innerText = code;
    tdKor.innerText = kor;
    tdEng.innerText = eng;
    tdMath.innerText = math;
    tdAvg.innerText = avg;
    if(avg >= 90) {
        tdGr.innerText = 'A';
    } else if(avg < 90 && avg >= 80) {
        tdGr.innerText = 'B';
    } else if(avg < 80 && avg >= 70) {
        tdGr.innerText = 'C';
    } else if(avg < 70 && avg >= 60) {
        tdGr.innerText = 'D';
    } else {
        tdGr.innerText = 'F';
    }

    tr.appendChild(tdName);
    tr.appendChild(tdCode);
    tr.appendChild(tdKor);
    tr.appendChild(tdEng);
    tr.appendChild(tdMath);
    tr.appendChild(tdAvg);
    tr.appendChild(tdGr);

    tableBody.appendChild(tr);
}