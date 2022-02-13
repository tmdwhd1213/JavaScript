// 1. String 생성자 함수를 new 연산자 업이 호출하는 방법.
// 숫자 타입 --> 문자열 타입
console.log(String(1));  // "1"
console.log(String(NaN));   // "NaN"

// 불리언 타입 --> 문자열 타입
console.log(String(true));  // "true"

// 2. Object.prototype.toString 메서드를 사용하는 방법.
// 숫자 --> 문자열
console.log((1).toString());    // "1"

// 3. 문자열 연결 연산자를 이용하는 방법.
console.log(1+ ""); // "1"

// 9.3.2. 숫자 타입으로 변환
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법.
console.log(Number('0'));       // 0
console.log(Number(false));     // 0

// 2. parseInt, parseFloat 함수를 사용하는 법(문자열만 변환 가능)
console.log(parseInt('9'));     // 9
console.log(parseFloat('0.342'));   // 0.342

// 3. +단항 산술 연산자를 이용하는 방법.
console.log(+'10.34');  // 10.34

// 4. * 산술 연산자를 이용하는 법.
console.log(true * 3);  // 3
console.log(false * 0); // 0

// 9.3.3. 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 법
console.log(Boolean(3));  // true
console.log(Boolean(''));   // False
console.log(Boolean('x'));  // true
console.log(Boolean(NaN));  // False
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity));    // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean({}));           // true
console.log(Boolean([]));           // true

// 2. ! 부정 연산자 두 번 사용하는 법.
console.log(!!'x');     // true
console.log(!!'');      // false

