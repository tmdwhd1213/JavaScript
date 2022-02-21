// 생성자 함수에 의한 프로토타입의 교체
const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    // 1 : 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        // 파괴된 constructor 프로퍼티와 생성자 함수 간의 연결을 되살려 보자.
        constructor: Person,
        sayHello() {
            console.log(`Hej! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Oh');

console.log(me.constructor);    // Person이 아닌 Object로 간다. 임의로 만든 Person에는 constructor가 없기 때문.
// constructor 프로퍼티와 생성자 함수 간의 연결을 설정해서 Person으로 간다.

// 생성자 함수(Person.prototype) : 교체된 프로토타입을 가리킨다.
// 인스턴스(parent) : 교체된 프로토타입을 가리키지 않는다.

// 2.2. 인스턴스에 의한 프로토타입의 교체
// 생성자 함수의 prototype 프로퍼티에 다른 임의의 객체를 바인딩하는 것은 미래에 생성할 인스턴스의 프로토타입을 교체하는 것이다.
// __proto__ 접근자 프로퍼티를 통핼 프로토타입을 교체하는 것은 이미 생성된 객체의 프로토타입을 교체하는 것이다.
function People(name) {
    this.name = name;
}

const I = new People('Oh');

// 프로토타입으로 교체할 객체
const parent = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person,
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

// 1. I 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(I, parent);   // === I.__proto__ = parent; 단, __proto__는 잘 사용하지 않는다.

I.sayHello();   // Hi! My name is Oh

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(I.constructor === Person);     // true
console.log(I.constructor === Object);      // False

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person.prototype === Object.getPrototypeOf(I));     // true

// 이처럼 프로토타입 교체를 통해 객체 간의 상속 관계를 동적으로 변경하는 것은 꽤나 번거롭다.
// 따라서 프로토타입은 직접 교체하지 않는 것이 좋다.