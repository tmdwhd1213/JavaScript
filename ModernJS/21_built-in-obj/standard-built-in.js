// Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise, Reflect,
// Proxy, JSON, Error 등 40 여개의 표준 빌트인 객체를 제공한다.

// Math, JSON, Reflect를 제외한 나머지 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체다.
// 생성자 함수 객체인 표준 빌트인 객체: 프로토타입 메서드와 정적 메서드를 제공, 아닌: 정적 메서드만 제공

// 표준 빌트인 객체는 생성자 함수로 호출하여 인스턴스를 생성할 수 있다.
const strObj = new String("oh");
console.log(typeof strObj);

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); // number{1.5}

// toFixed는 Number.prototype의 메서드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); // 2

// isInteger는 Number의 정적 메서드다.
// Number.isInteger는 인수가 정수인지 검사하여 불리언으로 반환한다.
console.log(Number.isInteger(0.5)); // false

// 원시 값과 래퍼 객체
// 문자열, 숫자, 불리언 등의 원시값이 있는데도 문자열, 숫자, 불리언 객체를 생성하는 String, Number, Boolean 등의
// 표준 빌트인 생성자 함수가 존재하는 이유는 무엇일까?
// 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.
const str = "hello";

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// 원시값을 객체처럼 사용하면 JS엔진은 암묵적으로 연관된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드르 호출하고
// 다시 원시값으로 되돌린다.
// 이처럼 원시값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체(wrapper object)라 한다.
// 예를 들어, 문자열에 대해 마침표 표기법으로 접근하면 그 순간 래퍼 객체인 String 생성자 함수의 인스턴스가 생성되고
// 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
const str1 = "hi";

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str1.length); // 2
console.log(str1.toUpperCase()); // HI

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str1); // string

const str2 = "hello";

// 1. 식별자 str2은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// 식별자 str2의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 해당된다.
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str.name = "Oh";

// 2. 식별자 str2은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 1에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 3. 식별자 str2은 새롭게 암묵적으로 생성된(1에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name); // undefined

// 4. 식별자 str2은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 3.에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str, str); // string hello

// String, Number, Boolean 생성자를 new 연산자와 함께 호출하여 문자열, 숫자, 불리언 인스턴스를 생성할 필요가 없으며 권장하지도 않는다.
// 또다른 원시값인 null과 undefined는 래퍼 객체를 생성하지 않는다. 객체처럼 사용하면 에러가 발생한다.
