// 11.1. Object.create에 의한 직접 상속
// 추상 연산 OrdinaryObjectCreate를 호출한다.
// Obejct.create 메서드의 첫 번째 param은 생성할 객체의 프로토타입으로 지정할 객체
// 두번째 param은 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 개체로 이뤄진 객체

/**
* 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체를 생성하여 반환한다.
* @param {Object} prototype - 생성할 객체의 프로토타입으로 지정할 객체
* @param {Object} [propertiesObject] - 생성할 객체의 프로퍼티를 갖는 객체
* @returns {Object} 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체
* Object.create(prototype[, propertiesObject])
*/

// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null );      // true
// Object.prototype을 상속받지 못한다. 종점이니까
// console.log(obj.toString());        // TypeError: obj.toString is not a function

// obj -> Object.prototype -> null
// obj = {}; 와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);   // true

// obj = { x: 1 }; 만들기
obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
});
/* 
위 코드는 이거랑 동일하다.
obj = Object.create(Object.prototype);
obj.x = 1;
*/
console.log(obj.x);     // 1

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x);         // 10
console.log(Object.getPrototypeOf(obj) === myProto);        // true

// 생성자 함수
function Person(name) {
    this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Oh')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Oh';
console.log(Object.getPrototypeOf(obj) === Person.prototype);       // true

/*
Object.create 메서드의 장점

1. new 연산자 없이도 객체를 생성할 수 있다.
2. 프로토타입을 지정하면서 객체를 생성할 수 있다.
3. 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.
*/

// ESLint에서는 Object.prototype의 빌트인 메서드(Object.prototype.hasOwnProperty 이딴거)를 객체가 직접 호출하는 것을 권장하지 않는다.
// Object.create 메서드를 통해 프로토타입 체인의 종점에 위치하는 객체를 생성할 수 있기 때문이다. (obj = Object.create(null) -> 제일 윗대가리)
// 체인의 종점에 위치하는 객체는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
// Error를 발생시킬 위험을 없애기 위해 Object.prototype의 빌트인 메서드는 간접적으로 호출하는 것이 좋다.
// 프로토타입이 null인 객체를 생성한다.
const obj1 = Object.create(null);
obj1.a = 1;

// console.log(obj1.hasOwnProperty('a'));
// TypeError: obj.hasOwnProperty is not a function

// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj1, 'a'));        // true


// 11.2. 객체 리터럴 내부에서 __proto__에 의한 직접 상속
// Object.create 메서드는 여러 장점이 있지만 두 번째 인자로 프로퍼티를 정의하는 것은 번거롭다.

// ES6에서는 객체 리터럴 내부에서 __proto__ 접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다.
const proto_literal = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj_literal = {
    y: 20,
    // 객체를 직접 상속받는다.
    // obj -> proto_literal -> Object.prototype -> null
    __proto__: proto_literal
};
/* 위 코드는 아래와 동일하다.
const obj_literal = Object.create(proto_literal, {
    y: { value: 20, writable: true, enumerable: true ,configurable: true }
});
*/

console.log(obj_literal.x, obj_literal.y);      // 10 20
console.log(Object.getPrototypeOf(obj_literal) === proto_literal);      // true