$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();

function getTable(이름, 학번, 국어, 영어, 수학, 합계, 평균, 학점) {

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