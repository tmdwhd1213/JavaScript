/*
switch (표현식) {
    case 표현식1:
        switch 문의 표현식과 표현식1이 일치하면 실행될 문;
        break;
    case 표현식2:
        switch 문의 표현식과 표현식2가 일치하면 실행될 문;
        break;
    default:
        switch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;
}
*/

// if문의 표현식은 불리언 값으로, switch문의 표현식은 숫자나 문자열 값.
// 따라서 switch문은 논리적 참, 거짓 보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.

// break;를 안 쓰고 fall through가 되는 것을 활용한 예제
var year = 2000;    // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어떨어지는 해
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해는 평년이다.
        // 3. 연도가 400으로 나누어떨어지는 해는 윤년이다.  우선순위1
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
        default:
            console.log('Invalid month');
}

console.log(days);  // 29

// 기본적으로는 if...else 문을 권장하지만 조건이 너무 많아 가독성이 떨어지는 경우 switch문을 권장한다.