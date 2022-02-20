// 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

// obj 객체를 생성한 생성자 함수는 Object다.
const obj = new Object();
console.log(obj.constructor == Object);             // true

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a', 'b', 'return a + b');
console.log(add.constructor === Function);          // true

// 생성자 함수
function Person(name) {
    this.name = name;
}

// me 객체를 생성한 생성자 함수는 Person이다.
const me = new Person('Oh');
console.log(me.constructor === Person);             // true


// 생성자 함수로 생성한 객체가 아닌 리터럴 표현법으로 생성.
// 객체 리터럴
const object = {};
console.log(object.constructor === Object);         // true

// 함수 리터럴
const sub = function(a, b) { return a - b };
console.log(sub.constructor === Function);          // true

// 배열 리터럴
const arr = [1, 2, 3];
console.log(arr.constructor === Array);             // true

// 정규 표현식 리터럴
const regexp = /is/ig;
console.log(regexp.constructor === RegExp);         // true

// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let object1 = new Object();
console.log(object1);       // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object {}
new Foo();
console.log(new Foo());      // Foo{}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체 생성
object1 = new Object(123);
console.log(object1);       // [Number: 123]

// String 객체 생성
object1 = new Object('123');
console.log(object1);       // [String: '123']

// 리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖는다.
// 프로토타입은 생성자 함수와 더불어 생성되며 prototype, constructor 프로퍼티에 의해 연결되어 있기 때문이다.
// 다시말해, 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 쌍(pair)으로 존재한다.