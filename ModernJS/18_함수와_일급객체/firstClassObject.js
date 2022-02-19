// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수난 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// JS의 함수는 이를 다 만족하므로 일급 객체이다.

// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function(num) {
    return ++num;
};

const decrease = function(num) {
    return --num;
};

// 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 함수의 매개변수에 전달, 반환값으로 사용할 수 있다.
function makeCounter(predicates) {
    let num = 0;

    return function() {
        num = predicates(num);
        return num;
    };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser());   // 1
console.log(increaser());   // 2

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());   // -1
console.log(decreaser());   // -2

