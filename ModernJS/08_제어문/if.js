/*
if (조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행
} else if (조건식2) {
    // 조건식2가 참이면 이 코드 블록이 실행
} else {
    // 모두 거짓이면 이 코드 블록이 실행
}
*/

var num = 2;
var kind;

// if문
if (num > 0 ) {
    kind = '양수';  // 음수를 구별할 수 없음.
}
console.log(kind);  // 양수

// if...else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';  // 0은 음수가 아니다.
}
console.log(kind);  // 양수

//if... else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '0';
}
console.log(kind); // 양수