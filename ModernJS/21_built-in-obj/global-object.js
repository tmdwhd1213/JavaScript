// 전역 객체는 코드가 실행되기 이전 단계에 JS 엔진에 의해 어떤 객체보다도 먼저 생성하는 특수한 객체이며
// 어떤 객체에도 속하지 않은 최상위 객체다.
// 브라우저 환경: window(또는 self, this, frames)가 전역 객체를 가리킴.
// Node.js: global이 전역 객체를 가리킨다.

// ES11에서 도입된 globalThis는 브라우저와 Node를 통일한 식별자다. 표준사양이므로 ECMAScript 표준을 준수하는 모든 환경에서 사용할 수 있다.
console.log(globalThis === global);

// 전역 객체는 계층적 구조상 어떤 객체에도 속하지 않은 모든 빌트인 객체의 최상위 객체다.
// 전역 객체가 최상위라는 것은 프로토타입 상속 관계상에서 최상위 객체라는 것이 아니다.
// 어떤 객체의 프로퍼티도 아니며 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 의미한다.

/** 전역 객체의 특징
 * 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
 * 전역 객체의 프로퍼티를 참조할 때 window(global)를 생략할 수 있다.
 */

// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
console.log(global.parseInt("F", 16)); // 15
// global.parseInt는 parseInt로도 호출할 수 있다.
console.log(parseInt("F", 16)); // 15

console.log(global.parseInt === parseInt); // true

// var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역,
// 전역함수는 전역 객체의 프로퍼티가 된다.

// var 키워드
var foo = 1;
console.log(global.foo); // global은 undefined뜨고 window는 1뜸     node.js에서는 var가 전역이 아닌가봄.
// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아닌 전역 객체의 프로퍼티다.
bar = 2; // global.bar = 2;
console.log(global.bar); // 2

/*// 전역 함수
function baz() {
  return 3;
}
console.log(globalThis.baz());  // TypeError: globalThis.baz is not a function, window에서는 3으로 정상 출력됨. 전역이 아닌가봄
*/

// let, const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
// 전역 렉시컬 환경의 선언적 환경 레코드 내에 존재하게 된다.

let foz = 123;
console.log(global.foz); // undefined

// 4.1. 빌트인 전역 프로퍼티: 전역 객체의 프로퍼티, 주로 애플리케이션 전역에서 사용하는 값을 제공한다.

// Infinity: 숫자 무한대
console.log(typeof Infinity); // number
console.log(-3 / 0); // -Infinity
console.log(global.Infinity); // Infinity

// NaN: Not a Number    숫자랑 문자열을 섞었을 때
console.log(typeof NaN); // number
console.log(global.NaN); // NaN

// undefined:
console.log(global.undefined); // undefined

var foa;
console.log(foa); // undefined

// 4.2. 빌트인 전역 함수: 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.

// eval: JS코드를 나타내는 문자열을 인수로 전달받는다.
// 전달받은 문자열 코드가 표현식이라면 eval함수는 런타임에 평가하여 값을 생성하고,
// 표현식이 아닌 문이라면 eval함수는 문자열 코드를 런타임에 실행한다.
// 여러 개의 문으로 이뤄져 있다면 모든 문을 실행한다.

/**
 * 주어진 문자열 코드를 런타임에 평가 또는 실행한다.
 * @param {string} code - 코드를 나타내는 문자열
 * @return {*} 문자열 코드를 평가/실행한 결과값
 */

// 표현식인 문
console.log(eval("1 + 2;")); // 3
// 표현식이 아닌 문
console.log(eval("var x = 5;")); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 소괄호로 둘러싼다.
const o = eval("({ a: 1 })");
console.log(o); // { a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval("(function () { return 1; })");
console.log(f()); // 1

// eval 사용 금지: 사용자로부터 입력받은 콘텐츠를 실행하는 것은 보안에 취약. 최적화가 수행x 따라서 처리속도 느림.

// isFinite
/**
 * 전달받은 인수가 유한수인지 확인하고 그 결과를 반환한다.
 * @param {number} testvalue - 검사 대상 값
 * @return {boolean} 유한수 여부 확인 결과
    isFinite(testValue);
*/

// 인수 유한하면 true
console.log(isFinite(null)); // null -> 0 -> true
console.log(isFinite(2e64)); // true

// 그 외의 경우 false
console.log(isFinite(Infinity)); // false 무한
console.log(isFinite(-Infinity)); // -무한 false
console.log(isFinite(NaN)); // NaN도 false

// isNaN -> NaN이면 true 아니면 false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true: undefined -> NaN

// parseFloat
/**
 * @param {string} string - 변환 대상 값
 * @returns {number} 변환 결과
 * ParseFloat(string)
 */

// 문자열을 실수로 해석하여 반환한다.
console.log(parseFloat("3.14")); // 3.14

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
console.log(parseFloat("40 35 65")); // 40
console.log(parseFloat("10 years")); // 10

// 첫 번째 문자열을 숫자로 바꿀 수 없다면 NaN
console.log(parseFloat("I am a boy")); // NaN

// 앞 뒤 공백은 무시된다.
console.log(parseFloat(" 50 ")); // 50

// parseInt
/**
 * 전달받은 문자열 인수를 정수로 해석하여 반환한다.
 * @param {string} string - 변환 대상 값
 * @param {number} [radix] - 진법을 나타내는 기수(2 ~ 36, 기본값 10이 아니라는데? -> 0x로 시작하면 16진수 나머지 다 10진수.)
 * @returns {number} 변환 결과
 * parseInt(string, radix);
 */

// '10'을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt("10")); // 10

// '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt("10", 2)); // 2

// '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt("10", 8)); // 8

// '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt("10", 16)); // 16

// 참고로 기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString메서드를 사용한다.
const y = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
y.toString(2); // -> '1111'
// 문자열 '1111'를 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
console.log(parseInt(y.toString(2), 2)); // 15

console.log(y.toString(16)); // f

// 0x(16진수)는 되지만, 0b(2진수), 0o(8진수)는 안된다. 0 이후가 무시됨.

// 첫 번째 문자가 해당 지수의 숫자로 변환할 수 없다면 NaN를 반환한다.
// 'A"는 10진수로 해석할 수 없다.
console.log(parseInt("A0")); // NaN
// '2'는 2진수로 해석할 수 없다.
console.log(parseInt("20", 2)); // NaN

// 숫자로 변환할 수 없는 문자가 나오면 그 이후로는 전부 무시된다.
// 8진수로 해석할 수 없는 '8'이후는 전부 무시된다.
console.log(parseInt("5824", 8)); // 5

// 공백은 parseFloat와 같이 무시된다. (첫번째 문자열만 표시 뒤는 무시.)
console.log(parseInt("35 50 years")); // 35

// encodeURI / decodeURI
// encodeURI 함수는 완전한 URI(Uniform Resource Identifier)를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.
// URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다.
/**
 * 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.,
 * @param {string} uri - 완전한 URI
 * @return {string} 인코딩된 URI
 * encodeURI(uri)
 */

// 완전한 URI
const uri = "http://example.com?name=오승종&job=programmer&baeksu";

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);

// decodeURI 함수는 인코딩된 URI를 인수로 전달받아 이스케이프 처리 이전으로 디코딩한다.
/**
 * 인코딩된 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
 * @param {string} encodedURI - 인코딩된 URI
 * @return {string} 디코딩된 URI
 * decodeURI(encodedURI);
 */

// decodeURI 함수는 인코딩된 완전환 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);

// 이스케이프 처리: 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환하는 것.

// encodeURIComponent / decodeURIComponent
// encodeURIComponent함수는 URI 구성 요소를 전달받아 인코딩한다. --> URI 구성문자를 이스케이프 처리하는 것.
/**
 * URI의 구성요소를 전달받아 이스케이프 처리를 위해 인코딩한다.
 * @param {string} uriComponent -URI의 구성요소
 * @return {string} 인코딩된 URI의 구성요소
 * encodeURIComponent(uriComponent)
 */

/**
 * 인코딩된 URI의 구성요소를 전달받아 이스케이프 처리 이전으로 디코딩한다.
 * @param {string} encodedURIComponent - 인코딩된 URI의 구성요소
 * @return {string} 디코딩된 URI의 구성요소
 * decodeURIComponent(encodedURIComponent);
 */

// encodeURIComponent 함수는 인수로 전달된 문자열을 URI 구성요소인 쿼리 스트링의 일부로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
// 반면 encodeURI 함수는 매개변수로 전달된 문자열을 완전한 URI 전체로 간주하기에 =, ?, &는 인코딩하지 않는다.

// URI의 쿼리 스트링
const uriComp = "name=오승종&job=programmer&baekSu";

// encodeURIComponent 함수
let encComp = encodeURIComponent(uriComp);
console.log(encComp); // name%3D%EC%98%A4%EC%8A%B9%EC%A2%85%26job%3Dprogrammer%26baekSu

let decComp = decodeURIComponent(encComp);
console.log(decComp); // name=오승종&job=programmer&baekSu

// 4.3. 암묵적 전역

// 전역 변수 z는 변수 호이스팅이 발생한다.(undefined)
console.log(z); // undefined
// w는 전역 객체의 프로퍼티이므로 변수 호이스팅이 발생하지 않는다.
// console.log(w); // ReferenceError: w is not defined

var z = 10; // 전역 변수

function foa() {
  // 선언하지 않은 식별자에 값을 할당
  w = 20; // global.w = 20;
}
foa();

// 선언하지 않은 식별자 w를 전역에서 참조할 수 있다.
console.log(z + w); // 30

// w는 전역 객체의 프로퍼티가 되어 마치 전역 변수처럼 동작한다. 이러한 현상을 암묵적 전역이라 한다.
// 하지만 w는 변수 선언 없이 단지 전역 객체의 프로퍼티로 추가되었을 뿐이다.
// 따라서 w는 변수가 아니다. 변수가 아니므로 변수 호이스팅이 발생하지 않는다.

// 전역 객체 프로퍼티인 w는 delete 연산자로 삭제할 수 있다.
delete w;
// 전역 변수 z는 프로퍼티이지만 삭제할 수 없다.
delete z;

// console.log(w); // ReferenceError: w is not defined
console.log(z); //
