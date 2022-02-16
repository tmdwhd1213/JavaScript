// 값과 타입이 모두 같은 경우만 true를 반환
console.log(5 === '5');  // false

// NaN은 자신과 일치하지 않는 유일한 연산자
console.log(NaN === NaN);    // false

// isNaN()함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
console.log(isNaN(NaN)); // true
console.log(isNaN(10));  // false
console.log(isNaN(1 + undefined));   // true

//0 과 -0은 일치 비교 연산자에서는 true로 나온다.
console.log(0 === -0);  // true

//ES6에선 object.is 메서드를 이용해 진짜 동등한 것끼리만 true값을 반환하도록 한다.
console.log(Object.is(-0, 0));  // false
console.log(Object.is(NaN, NaN));   // true