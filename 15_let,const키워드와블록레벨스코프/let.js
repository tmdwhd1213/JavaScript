// 2.1. 변수 중복 선언 금지
var foo = 123;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 아래 변수 선언문은 JS 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var foo = 456;

let bar = 123;
// let or const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// let bar = 456;      // syntaxError: Identifier 'bar' has already been declared.

// 2.2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프이다.
let foo2 = 'global foo';    // 전역 변수

{
    let foo2 = 'local foo'; // 지역 변수
    let bar2 = 'local bar';    // 지역 변수
    
    console.log(foo2);   // local foo
    console.log(bar2);   // local bar
}

console.log(foo2);        // global foo
// console.log(bar2);        // ReferenceError: bar is not defined.

// let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다.
let i = 10;                                 // 전역 스코프
function foo3() {                            // <--- 함수 내의 함수 레벨 스코프 (함수 또한 코드 블록.)
    let i = 100;

    for(let i = 0; i <= 3; i++) {           // <--- for문 내의 블록 레벨 스코프
        console.log(i);     // 0 1 2 3
    }

    console.log(i);         // 100
}

foo3();

console.log(i);             // 10

// 2.3. 변수 호이스팅
// let 키워드로 선언한 변수는 호이스팅이 발생하지 않는 것처럼 동작한다.
// console.log(foo4);   // ReferenceError
let foo4 = 1;

// let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다.
// 스코프의 시작 지점부터 초기화 단계 시작 지점(변수 선언문)까지 변수를 참조할 수 없다.
// 이 구간을 일시적 사각지대(Temporal Dead Zone; TDZ)라고 한다.
/*
                선언단계                // ReferenceError
                일시적 사각지대(TDZ)    // ReferenceError
let foo;        초기화 단계             // foo === undefined
foo = 1;        할당 단계               // foo === 1 
*/

// let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않은 것처럼 보이는데 그렇지 않다.
let foo5 = 1;   // 전역 변수

{
    // console.log(foo5);   // ReferenceError: cannot access 'foo5' before initialization
    let foo5 = 2;   // 지역 변수
}
// 변수 호이스팅이 발생하지 않는다면 위 예제는 전역 변수 foo5의 값을 출력해야 한다.
// 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러가 발생한다.
// JS는 ES6에서 도입된 let, const를 포함해 모든 선언(var, let, const, function, function*, class 등)을 호이스팅한다.
// 단, let, const, class는 호이스팅이 발생하지 않는 "것처럼" 동작한다.
