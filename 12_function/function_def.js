// 함수 선언문  : 표현식이 아닌 문
function difference(x, y) {
    return x - y;
}

// 함수 참조
// console.dir은 console.log와 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(difference);    // [Function: difference]

// 함수 호출
console.log(difference(2, 5));  // -3

// 함수 리터럴은 함수 이름을 생략할 수 있으나, 함수 선언문은 생략할 수 없다.
/*
function(x, y) {
    return x + y;
}                   // SyntaxError: Function statements require a function name
*/

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아닌 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.

(function bar() { console.log('bar') } );
// bar(); // referenceError: bar is not defined.


// "함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다."
// 위 예제는 함수를 가리키는 식별자가 없으므로 bar함수는 호출할 수 없다.

function foo() {console.log('foo');}
foo();  // foo
// foo는 함수 몸체 내부에서만 유효한 식별자인 함수 이름이므로 foo로 함수를 호출할 수 없어야 한다.
// foo라는 이름으로 함수를 호출하려면 foo는 함수 이름이 아닌 함수 객체를 가리키는 식별자여야 한다.
// but, JS 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
// 위 코드는 아래와 같다.
var foo = function foo() {
    console.log('foo');
}
foo();
// 함수는 함수 이름으로 호출하는 것이 아닌 함수 객체를 가리키는 식별자로 호출된다.

// 함수 표현식 : JS의 함수는 객체 타입의 값이다. 값처럼 변수에 할당할 수 있고, 프로퍼티 값이 될 수도 있으며 배열의 요소가 될 수도 있다.
// 이처럼 값의 성질을 갖는 객체를 일급 객체라 한다. JS의 함수는 일급 객체이다. 이는 함수를 값처럼 자유롭게 사용할 수 있다는 의미다.
// 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다. 이러한 함수 정의 방식을 함수 표현식이라 한다.(function Expression)
// 함수 표현식 예제
var add = function add(x, y) {
    return x + y;
}
console.log(add(4, 5));  // 9


// 기명 함수 표현식
var add = function foo(x, y) {
    return x + y;
}
// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5));     // 7

// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(3, 4));     // foo undefined


// 함수 생성 시점과 함수 호이스팅

// 함수 참조
console.dir(add);   // f add(x, y)
console.dir(sub);   // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function(x, y) {
    return x - y;
};

// 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
// 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문이다.
// 코드가 한 줄씩 순차적으로 실행되기 시작하는 런타임에는 이미 함수 객체가 생성되어 있고 함수 이름과 동일한
// 식별자에 할당까지 완료된 상태다. 따라서 함수 선언문 이전에는 함수를 참조할 수 있으면 호출할 수도 있다.
// 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 JS 고유의 특징을 함수 호이스팅(hoisting)이라 한다.

// 변수 선언은(var 식별자) 런타임 이전에 실행되어 undefined로 초기화되지만 변수 할당문의 값은 할당문이 실행되는 시점.
// 즉, 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.
// 따라서 함수 표현식으로 함수를 정의하면 함수 호이스팅이 아닌 변수 호이스팅이 발생한다.