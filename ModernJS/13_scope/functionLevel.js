// 지역은 함수 몸체 내부를 말하고 지역은 지역 스코프를 만든다고 했다. 이는 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다는 의미다.
// JS에서 var 키워드로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
// 이러한 특성을 함수 레벨 스코프라고 한다.
var x = 1;

if(true) {
    // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
    // 따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
    // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x);     // 10

// if 문 내에서 선언된 x변수는 전역 변수다. var 키워드로 선언된 변수는 블록 레벨 스코프를 인정하기 때문에
// 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었을지라도 모두 전역 변수다.
// 따라서 의도치 않게 값이 재할당되어버린다.

var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언한다.
for (var i = 0; i < 5; i++) {
    console.log(i);     // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i);     // 5

// ES6에서 도입된 let, const 키워드는 블록 레벨 스코프를 지원한다.
