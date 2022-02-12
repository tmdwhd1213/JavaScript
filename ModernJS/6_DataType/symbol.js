//ES6에서 추가된 7번째 타입. 다른 값과 중복되지 않는 유일무이한 값.
// 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용된다.
// symbol 함수를 호출해 생성한다. 외부에 값이 노출되지 않는다.

// 심벌 값 생성
var key = Symbol('key');    // 대문자S
console.log(typeof key);    // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]);  // value