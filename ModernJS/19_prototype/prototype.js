// 프로토타입: 상속을 구현하기 위해 사용.
// 모든 객체는 __proto__ 접근자 프로퍼티를 통해 [[Prototype]] 내부 슬롯(내부 슬롯은 프로퍼티가 아니다.)에 간접적으로 접근할 수 있다.

// Object.prototype의 접근자 프로퍼티인 __proto__는 getter/setter 함수라고 부르는 접근자 함수([[get]], [[set]] 프로퍼티 어트리뷰트에 할당된 함수)
// 를 통해 [[Prototype]] 내부 슬롯의 값, 즉 프로토타입을 취득하거나 할당한다.
// 프로토타입에 접근하면 내부적으로 __proto__ 접근자 프로퍼티의 getter 함수(get__proto__)가 호출된다.
// __proto__ 접근자 프로퍼티를 통해 새로운 프로토타입을 할당하면 setter 함수(set__proto__)가 호출된다.

const obj = {};
const parent = { x: 1 };

// getter 함수인 get__proto__가 호출되어 obj객체의 프로토타입을 취득
obj.__proto__;
// setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x);     // 1

// __proto__ 는 객체가 직접 소유하는 것이 아닌 Object.prototype의 프로퍼티다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.

const person = { name: 'oh' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__'));    // false

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
//   { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log(person.__proto__ === Object.prototype);

// __proto__ 를 통해 프로토타입에 접근하는 이유 : 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.
const mother = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = mother;
// mother의 프로토타입을 child로 설정
// mother.__proto__ = child;   // TypeError: Cyclic __proto__ value
// 서로가 자신의 프로토타입이 되는 비정상적인 프로토타입 체인이 만들어지기 때문에 에러가 발생한다.
// 프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다. (1호선)
// 순환 구조로 되어 있으면 무한 루프에 빠진다.(2호선)
// 아무런 체크 없이 무조건적으로 프로토타입을 교체할 수 없도록 __proto__를 통해 프로토타입에 접근하고 교체하도록 구현되어 있다.

// 코드 내에서 __proto__를 직접 사용하는 것은 권장하지 않는다. 모든 객체가 사용할 수 있는 것은 아니기 때문이다.
// object는 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const object = Object.create(null);

// object는 Object.__proto__를 상속받을 수 없다.
console.log(object.__proto__);      // undefined

// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(object));     // null

const obj1 = {};
const parent1 = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj1);   // [Object: null prototype] {}
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj1, parent1);

console.log(obj.x);     // 1

// Object.getPrototypeOf(ES5), Object.setPrototypeOf(ES6)부터 도입된 메서드

// 3.2. 함수 객체의 prototype 프로퍼티
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
console.log((function() {}).hasOwnProperty('prototype'));    // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(({}).hasOwnProperty('prototype'));       // false

// 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 
// prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

// 화살표 함수는 non-constructor다.
const Person = name => {        // == const Person = function(name) { this.name = name; };
    this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype'));    // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype);      // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
const ES6 = {
    foo() {}
};

console.log(ES6.foo.hasOwnProperty('prototype'));       // false
console.log(ES6.foo.prototype);                         // undefined

// __proto__ : 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
// prototype 프로퍼티 : 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용

// 생성자 함수
function People(name) {
    this.name = name;
}

const me = new People('Oh');

// 결국 People.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다.
console.log(People.prototype === me.__proto__);     // true

// 프로토타입의 constructor 프로퍼티와 생성자 함수
// 모든 프로토타입은 constructor 프로퍼티를 갖는데 이는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
// 이 연결은 생성자 함수가 생성될때 ,즉 함수 객체가 생성될 때 이뤄진다.

// 생성자 함수
function Human(name) {
    this.name = name;
}

const he = new Human('Oh');

// he 객체의 생성자 함수는 Human이다.
console.log(he.constructor === Human);      // true