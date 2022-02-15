// 매개변수와 인수 : parameter를 통해 인수(argument)를 전달한다. 
// 인수는 평가될 수 있는 표현식이어야 한다. 인수는 함수를 호출할 때 지정하며, 개수와 타입에 제한이 없다.

//함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

// 매개변수는 함수 몸체 내부에서만 참조가능, 즉 매개변수의 스코프(유효범위)는 함수 내부다.
function add2(x, y) {
    console.log(x, y);  // 2 5
    return x + y;
}

add2(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
//console.log(x, y);  // ReferenceError

function add3(x, y) {
    return x + y;
}

console.log(add3(3));   // 3 + undefined = NaN

//ex 12-19
function add4(x, y) {
    console.log(arguments);     // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]
    return x + y;
}

console.log(add4(2, 5, 10));     // 7
// 초과된 인수 10이 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티에 보관된다.


// 12.5.2 인수 확인
// ex 12-22
function add5(x, y) {
    return x + y;
}

console.log(add5(2));       // NaN
console.log(add('a', 'b')); // ab

// JS 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// JS는 동적 타입 언어다. 따라서 JS 함수는 매개변수의 타입을 사전에 지정할 수 없다.
// 따라서 JS의 경우 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.
// ex 12-23
function add6(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
       // throw new TypeError('인수는 모두 숫자 값이어야 한다.');
    }

    return x + y;
}

console.log(add6(2));        // TypeError: 인수는 ~
console.log(add6('a', 'b')); // TypeError: 인수는 ~

//[ex 12-24]
function add7(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add7(1, 2, 3)); // 6
console.log(add7(1, 2));    // 3
console.log(add7(1));       // 1
console.log(add7());        // 0

// ES6에서 도입된 매개변수 기본값
function add8(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(add8(1, 2, 3)); // 6
console.log(add8(1, 2));    // 3
console.log(add8(1));       // 1
console.log(add8());        // 0