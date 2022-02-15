// 1. 전역과 전역 스코프
var x = "global x";
var y = "global y";

function outer() {
    var z = "outer's local z";

    console.log(x);     // global x
    console.log(y);     // global y
    console.log(z);     // outer's local z

    function inner() {
        var x = "inner's local x"

        console.log(x);     // inner's local x
        console.log(y);     // global y
        console.log(z);     // outer's local z
    }

    inner();
}

outer();

console.log(x);     // global x
// console.log(z);     // ReferenceError: z is not defined.

// 전역 변수는 어디서든지 참조할 수 있다.

// 2. 지역과 지역 스코프
/*
지역이란 함수 몸체 내부를 말한다. 이는 지역 스코프를 만든다.
지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 된다.
지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.
전역 변수와 지역 변수 명이 같을 때 지역 변수를 사용한다.
이는 JS 엔진이 스코프 체인을 통해 참조할 변수를 검색했기 때문이다.
*/