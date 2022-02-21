// 객체 instanceof 생성자함수
// 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고
// 그렇지 않으면 false로 평가된다.

// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Oh');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입 교체
Object.setPrototypeOf(me, parent);

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person);      // true,    Parent 객체로 교체 후 false

// Object.prototype이 me 객체의 ~
console.log(me instanceof Object);      // true

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent);       // false
console.log(parent.constructor === Person);     // false

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.
Person.prototype = parent;

console.log(me instanceof Person);      // true

// 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다.

// instanceof 연산자를 함수로 표현
function isInstanceof(instance, constructor) {
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
    if (prototype === null) return false;

    // 프로토타입 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
    // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));      // true
console.log(isInstanceof(me, Object));      // true
console.log(isInstanceof(me, Array));       // false

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결은 파괴되지 않으므로 instanceof는 아무런 영향을 받지 않는다.

