// 표현식인 문은 값으로 평가될 수 있는 문.
// 따라서 변수 선언문은 표현식이 아닌 문이다.
// 할당문은 값으로 평가될 수 있으므로 표현식인 문이다.

// 표현식인 문과 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해 보는 것이다.

var foo = x = 100;
console.log(foo);   // 100