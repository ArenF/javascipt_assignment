//사이즈 재설정
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();

const tableBody = document.getElementById("table_output");

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
    const avg = sum / 3;

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
  }

//값 테이블
function getTable(이름, 학번, 국어, 영어, 수학, 평균, 학점) {

    document.write("<table border = '1' width = '1000'>");
    document.write("<tr><td>이름</td><td>학번</td><td>국어</td><td>영어</td><td>수학</td><td>합계</td><td>평균</td><td>학점</td></tr>");
    for(i = 0; i< myArray.length; i++) {
        document.write("<tr>");
        for(j = 0; j < myArray[i].length; j++) {
            document.write("<td>" + myArray[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}