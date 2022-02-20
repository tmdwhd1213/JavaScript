// 객체는 다음과 같이 다양한 생성 방법이 있다.
/*
객체 리터럴
Object 생성자 함수
생성자 함수
Object.create 메서드
클래스(ES6)
*/
// 추상연산 OrdinaryObjectCreate에 의해 생성된다는 공통점이 있다.
// 필수적으로 자신이 생성할 객체의 프로토타입을 인수로 전달받는다.
// 자신이 생성할 객체에 추가할 프로퍼티 목록을 옵션으로 전달할 수 있다.
// 추상 연산 OrdinaryObjectCreate는 빈 객체를 생성한 후, 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가한다.
// 인수로 전달받은 프로토타입을 자신이 생성한 객체의 [[Prototype]] 내부 슬롯에 할당한 다음, 생성한 객체를 반환한다.
// 즉, 프로토타입은 추상 연산 OrdinaryObjectCreate에 전달되는 인수에 의해 결정된다.
// 이 인수는 객체가 생성되는 시점에 객체 생성 방식에 의해 결정된다.

// 6.1. 객체 리터럴에 의해 생성된 객체의 프로토타입
// JS엔진은 객체 리터럴을 평가하여 객체를 생성할 때 추상 연산 OrdinaryObjectCreate를 호출한다.
// 이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다.
// 즉, 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.

const obj = { x: 1 };
console.log(obj.constructor === Object);    // true
console.log(obj.hasOwnProperty('x'));       // true

// 6.2. Object 생성자 함수에 의해 생성된 객체의 프로토타입
// Object 생성자 함수를 인수 없이 호출하면 빈 객체가 생성된다.

const object = new Object();
object.x = 1;

console.log(object.constructor === Object);    // true
console.log(object.hasOwnProperty('x'));       // true

// 6.3. 생성자 함수에 의해 생성된 객체의 프로토타입
function Person(name) {
    this.name = name;
}
const me = new Person('Oh');
console.log(me.constructor === Person);    // true
console.log(me.hasOwnProperty('name'));     // true
// 사용자 정의 생성자 함수 Person과 더불어 생성된 프로토타입 Person.prototype의 프로퍼티는 constructor뿐이다.

// 프로토타입 Person.prototype에 프로퍼티를 추가하여 하위 객체가 상속받을 수 있도록 구현하자.
// 프로토타입은 객체다.
// 따라서 일반 객체와 같이 프로퍼티를 추가/삭제 할 수 있다.
// 추가/삭제된 프로퍼티는 프로토타입 체인에 즉각 반영된다.

// 프로토타입 메서드
Person.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
};

const you = new Person('Kim');

me.sayHello();      // Hi! My name is Oh
you.sayHello();     // Hi! My name is Kim