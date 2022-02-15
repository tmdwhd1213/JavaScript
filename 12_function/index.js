// f(x, y) = x + y
// add = 함수이름, (x, y) = 매개변수, x + y = 리턴값
function add(x, y) {
    return x + y;
}

// f(2, 5) = 7
console.log(add(2, 5));     // (2, 5) = 인수

// 함수를 사용하는 이유 : 재사용이 가능하다. 중복을 줄일 수 있다.
/* 아래 코드를 함수로 간단히 만들 수 있다.
var x = 0;
var y = 0;
var result = 0;

x = 1;
y = 2;
result = x + y; // 3

x = 3;
y = 4;
result = x + y; // 7

x = 5;
y = 6;
result = x + y; // 11
*/
// 함수 사용
function sum(x, y) {
    return x + y;
}
var result = 0;

result = sum(1, 2); // 3
result = sum(3, 4); // 7
result = sum(5, 6); // 11 

// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
}
console.log(f(1, 3));   // 4
// 리터럴은 값을 생성하기 위한 표기법. 함수 리터럴도 평가되어 값을 생성하며, 이 값은 객체다. 즉, 함수는 객체다.
// 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 일반 객체에는 없는 함수 객체만의 고유한 프로퍼티를 갖는다.
