// length프로퍼티 : 함수 객체. 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
function foo() {}
console.log(foo.length);    // 0

function bar(x) {
    return x;
}
console.log(bar.length);    // 1

function baz(x, y, z) {
    return (x - y) * z;
}
console.log(baz.length);    // 3

// 주위! argument.length는 인자의 개수를, function의 length프로퍼티는 매개변수의 개수를 나타낸다.

// name프로퍼티 : ES6에서 정식 표준이 되었다. 
// 익명 함수 표현식일 경우 ES5에서 빈 문자열을 값으로 갖는다.
// ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

// 기명 함수 표현식
var nameFunc = function foo() {};
console.log(nameFunc.name);     // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name);

// 함수 선언문
function bar() {}           // == var bar = function bar() {} 
console.log(bar.name);      // bar

// __proto__ 접근자 프로퍼티
// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. 이는 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
// __proto__는 [[Prototype]]에 접근하기 위한 접근자 프로퍼티로 이를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype);    // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty('a'));       // true
console.log(obj.hasOwnProperty('__proto__'));   // false
// hasOwnProperty 메서드는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고
// 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.
console.log(Object.prototype.hasOwnProperty('__proto__'));  // true

// Prototype 프로퍼티
// 생성자 함수로 호출할 수 있는 함수 객체 즉, constructor만이 소유하는 프로퍼티다. non-const는 없다.
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function() {}).hasOwnProperty('prototype'));      //true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype');   // false