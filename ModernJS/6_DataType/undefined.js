// var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다. 
// 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 빈 상태(garbage value가 들어있다.)로 내버려두지 않고 JS엔진이 undefined로 초기화한다.
// 변수 선언 후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.

var foo;
console.log(foo);   // undefined(정의되지 않은, 공백(null)이랑은 다르다.)