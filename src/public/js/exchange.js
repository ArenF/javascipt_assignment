function calculateExchange() {
    // 환율에 따라 계산 로직을 추가
    const exchangeRate = 1.2; // 예시 환율 (달러 -> 원)

    // 입력된 수치
    const beforeValue = parseFloat(document.getElementById('beforeValue').value);

    // 계산된 결과
    const afterValue = beforeValue * exchangeRate;

    // 결과를 콤마가 있는 문자열로 변환
    const formattedResult = new Intl.NumberFormat().format(afterValue);

    // 결과를 출력
    document.getElementById('afterValue').value = formattedResult;
}
