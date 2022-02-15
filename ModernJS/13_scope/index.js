function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y);  // 2 5
    return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y);  // ReferenceError: x is not defined.

// 변수는 코드의 가장 바깥 영역뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언할 수 있다.
// 이때 코드 블록이나 함수는 중첩될 수 있다.

var var1 = 1;   // 코드 가장 바깥 영역에서 선언한 함수

if(true) {
    var var2 = 2;   // 코드 블록 내에서 선언한 함수
    if(true) {
        var var3 = 3;   // 중첩된 코드 블록 내에서 선언한 함수
    }
}

function foo() {
    var var4 = 4;   // 함수 내에서 선언한 함수

    function bar() {
        var var5 = 5;   // 중첩된 함수 내에서 선언한 함수
    }
}

console.log(var1);  // 1
console.log(var2);  // 2
console.log(var3);  // 3
// console.log(var4);  // ReferenceError : var4 is not defined
// console.log(var5);  // ReferenceError : var5 is not defined

// 변수는 자신이 선언된 위치에 의해 자신이 유효한 범위, 즉 다른 코드가 변수 자신을 참조할 수 있는 범위가 결정된다.
// 변수뿐만 아니라 모든 식별자가 그렇다.
// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
// 이를 스코프라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다.

var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);     // local, foo 함수 내부에서만 참조할 수 있고, 외부에서는 참조 불가능.
}

foo();

console.log(x);         // global

// JS 엔진은 이름이 같은 두 개의 변수 중 어떤 변수를 참조해야할지 결정한다.
// 이는 스코프를 통해 결정되는데, 따라서 스코프란 JS 엔진이 식별자를 검색할 때 사용하는 규칙이라고도 한다.
// JS 엔진은 코드를 실행할 때 코드의 문맥(context)을 고려한다.
/*
"코드가 어디서 실행되며 주변에 어떤 코드가 있는지"를 렉시컬 환경이라고 부른다.
즉, 코드의 문맥은 렉시컬 환경으로 이뤄진다.
"실행 컨텍스트"이며, 모든 코드는 실행 컨텍스트에서 평가되고 실행된다.
스코프는 실행 컨텍스트와 깊은 관련이 있다.
*/

// 컴퓨터 파일은 같은 공간에서 같은 이름(식별자)인 경우 다른 이름으로 변경된다. 하지만 디렉토리 밖에 같은 이름이면 상관없는 것이랑 같은 이치.

// var 키워드 부작용
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.
function foo() {
    var x = 1;
    // 아래 변수 선언문은 JS 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
    var x = 2;
    console.log(x);     // 2
}
foo();

// 하지만 ES6에 추가된 let, const를 사용하면 같은 스코프 내에서 중복 선언을 허용하지 않는다.
function bar() {
    let x = 1;
    // let x = 2;      // syntaxError: Identifier 'x' has already been declared.
    console.log(x);     // 1
}
bar();