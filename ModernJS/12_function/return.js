// 함수는 return 키워드와 표현식으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환할 수 있다.
// ex 12-27
function multiply(x, y) {
    return x * y;   // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result);    // 15

// 반환문은 두 가지 역할을 한다. 첫째, 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다.
// 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
// ex 12-28
function multi(x, y) {
    return x * y;   // 반환문
    // 반환문 이후에 다른 문이 존재하면 그 문은 무시된다.
    console.log('실행되지 않는다.');
}

console.log(multi(2, 19));  // 38

// 둘째, return 키워드 뒤에 오는 표현식을 평가해 반환한다. 
// return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.

function foo() {
    return;
}
console.log(foo()); // undefined

// 반환문은 생략 가능하다. 이 때 함수는 함수 몸체의 마지막 문까지 실행한 후 암묵적으로 undefined를 반환한다.
function foo1() {
    // 반환문을 생략하면 암묵적으로 undefined가 반환.
}
console.log(foo1());    // undefined

// 줄바꿈 시 동작
function sub(x, y) {
    // return 키워드와 반환값 사이에 줄바꿈이 있으면
    return  // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
    x - y;  // 무시된다
}

console.log(sub(3, 2)); // undefined