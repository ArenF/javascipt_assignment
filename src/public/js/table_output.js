function getTable(이름, 학번, 국어, 영어, 수학, 합계, 평균, 학점) {

    const myArray = new Array();
        const titleArray = new Array("이름", "학번", "국어", "영어", "수학", "합계", "평균", "학점");

        i=0;

        while(confirm("성적정보를 입력할까요?")) {
            myArray[i] = new Array();
            for(j=0; j < titleArray.length-3; j++) {
                myArray[i][j] = prompt(titleArray[j]+ "입력해주세요.", "");
            }

            myArray[i][5] = parseInt(myArray[i][2])+ parseInt(myArray[i][3]) 
                + parseInt(myArray[i][4]);
            myArray[i][6] = myArray[i][5] / 3;

            if (myArray[i][6] >= 90) {
                myArray[i][7] = 'A';
            } else if (myArray[i][6] >= 80 && myArray[i][6] < 90) {
                myArray[i][7] = 'B';
            } else if (myArray[i][6] >= 70 && myArray[i][6] < 80) {
                myArray[i][7] = 'C';
            } else if (myArray[i][6] >= 60 && myArray[i][6] < 70) {
                myArray[i][7] = 'D';
            } else if (myArray[i][6] >= 50 && myArray[i][6] < 60) {
                myArray[i][7] = 'E';
            } else {
                myArray[i][7] = 'F';
            }

            i++; 
    }

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