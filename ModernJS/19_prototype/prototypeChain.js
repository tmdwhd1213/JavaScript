function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function() {
    console.log(`Hi! My Name is ${this.name}`);
};

const me = new Person('Oh');

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty('name'));     // true

// me 객체가 Person.prototype뿐만 아니라 Object.prototype도 상속받다는 것을 의미한다.
// 프로토타입의 프로토타입은 언제나 Object.prototype이다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);       // true

// JS는 객체의 프로퍼티(메서드 포함)에 접근하려 할 때 없으면 [[Prototype]] 내부 슬롯을 참조하여 자신의 부모에게 순차적으로 찾아 검색한다.
// 이를 프로토타입 체인이라 한다. 이는 JS가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.

console.log(me.hasOwnProperty('name'));     // true

// 1. hasOwnProperty 메서드를 호출한 me 객체에는 없다. 그 위 부모, [[Prototype]]에 바인딩되어있는 프로토타입 Person.prototype으로 가보자.
// 2. me 객체의 부모인 Person.prototype에도 없다. 그 위로 가보자.
// 3. 체인을 따라 Object.prototype으로 가니 hasOwnProperty 메서드가 존재한다.
// 이때 Object.prototype.hasOwnProperty 메서드의 this에는 me 객체가 바인딩된다.

console.log(Object.prototype.hasOwnProperty.call(me, 'name'));      // true

// 체인의 종점인 Object.prototype에서도 프로퍼티를 검색할 수 없는 경우 undefined를 반환한다. 에러가 나지 않으므로 주의하자.
console.log(me.foo);    // undefined
// 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘이라고 할 수 있다.

// 이에 반해, 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다.
// 다시 말해, JS 엔진은 함수의 중첩 관계로 이루어진 스코프의 계층적 구조에서 식별자를 검색한다.
// 따라서 스코프 체인은 식별자 검색을 위한 메커니즘이라고 할 수 있다.
me.hasOwnProperty('name');