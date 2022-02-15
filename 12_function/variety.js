// 1. 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는 함수. 단 한번만 호출되며 다시 호출할 수 없다.

// 익명 즉시 실행 함수
(function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);   // 15
// 즉시 실행 함수도 인수를 전달할 수도 있다.
res = (function(a, b) {
    return a * b;
}(4, 5));

console.log(res);   // 20
// 즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌을 방지할 수 있다.

// 2. 재귀 함수
// 함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다. 자기 자신을 호출하는 함수
// 반복되는 처리를 위해 사용한다. 예를 들어, 10부터 0까지 출력하는 함수
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

// 반복문 없이 재귀함수를 이용하는 법
function countdown_r(n) {
    if (n < 0) return;
    console.log(n);
    countdown_r(n - 1);   // 재귀 호출
}

countdown_r(10);

// 팩토리얼은 재귀 함수로 간단히 구현할 수 있다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(0));  // 0! = 1
console.log(factorial(1));  // 1! = 1
console.log(factorial(5)); // 5! = 120

// 재귀 함수는 자신을 무한 재귀 호출하므로 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.
// 위 예제의 경우 인수가 1 이하일 때 재귀 호출을 멈춘다.
// 탈출 조건이 없으면 무한 홏출되어 스택 오버플로에러(stack overflow)가 발생한다.
// 대부분의 재귀함수는 for문이나 while문으로 구현 가능하다.
function fact(n) {
    if(n <= 1) return 1;

    var res = n;
    while (--n) res *= n;
    return res;
}
// 재귀함수는 무한 반복에 빠질 위험이 있으므로 반복문보다 직관적으로 이해하기 쉬울 경우에만 사용할 것.

// 3. 중첩 함수
/*
함수 내부에 정의된 함수. 중첩 함수를 포함한 함수를 외부함수라 부른다. 중첩 함수는 외부 함수 내부에서만 호출할 수 있다.
일반적으로 중첩함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.
*/
function outer() {
    var x = 1;

    // 중첩 함수
    function inner() {
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }

    inner();
}

outer();

// ES6부터 함수 정의는 if, for문 등의 코드 블록 내에서도 정의할 수 있는데,
// 호이스팅으로 인해 혼란이 발생할 수 있으므로 바람직하지 않다.

// 4. 콜백 함수 : 어떤 일을 반복 수행하는 repeat 함수를 정의해 보자.
// n만큼 어떤 일을 반복한다.
function repeat(n) {
    // i를 출력한다.
    for(var i = 0; i < n; i++) console.log(i);
}

repeat(5);  // 0 1 2 3 4

// repeat함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 console.log(i)를 호출한다.
// 이때 repeat함수는 console.log(i)에 강하게 의존하고 있어 다른 일을 할 수 없다.
// 따라서 만약 repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
    for(var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력
        if(i % 2) console.log(i);
    }
}

repeat2(5);     // 1 3

// 함수를 합성하는 것으로 해결할 수 있다. 함수의 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서
// 함수 외부에서 함수 내부로 전달하는 것이다.

// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat3(n, f) {
    for(var i = 0; i < n; i++) {
        f(i);
    }    // i를 전달하면서 f를 호출
}

var logAll = function(i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat3(5, logAll);  // 0 1 2 3 4

// 콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면 함수 내부에서
// 콜백 함수를 정의한 후 함수 참조를 고차 함수에 전달하는 편이 효율적이다.

// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function(i) {
    if(i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat3(5, logOdds);     // 1 3 

// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라 하며, 
// 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수라고 한다.
// 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
// 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
// 콜백함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat3(5, function(i) {
    if(i % 2) console.log(i);
}); // 1 3


// 콜백 함수는 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등)에 활용되는 중요한 패턴이다.
// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
/*
document.getElementById('myButton').addEventListener('click', function() {
    console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메세지를 출력한다.
setTimeout(function() {
    console.log('1초 경과');
}, 1000);
*/

// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function(item) {
    return item * 2;
});

console.log(res);   // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function(item) {
    return item % 2;
});

console.log(res);   // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function(acc, cur) {
    return acc + cur;
}, 0);

console.log(res);     // 6

// 5. 순수 함수와 비순수 함수
// 외부에 의존, 상태 변경 : 비순수 함수
// 의존X, 상태 변경X : 순수 함수

// 순수 함수
var count = 0;

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
    return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

// 비순수 함수 : 부수 효과 존재
var count_imp = 0;

function increase_imp() {
    return ++count_imp;         // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count_imp)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase_imp();
console.log(count_imp); // 1

increase_imp();
console.log(count_imp); // 2

// 함수 내부에서 외부 상태를 직접 참조하지 않더라도 매개변수를 통해 객체를 전달받으면 비순수 함수가 된다.
// 변수 사용을 억제하거나 생명주기를 최소화해서 상태 변경을 피해 오류를 최소화하는 것을 목표로 프로그래밍하자.(함수형 프로그래밍)
// JS는 멀티 패러다임 언어이므로 객체지향, 함수형 프로그래밍(순수 함수 지향)을 적극적으로 활용해야 한다.