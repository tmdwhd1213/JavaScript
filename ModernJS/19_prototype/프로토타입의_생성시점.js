// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다. (언제나 쌍으로 존재)

// 5.1. 사용자 정의 생성자 함수와 프로토타입 생성 시점
// [[Construct]]를 갖고 있는 함수 객체, 즉 화살표 함수나 ES6 메서드 축약 표현으로 정의하지 않은 일반 함수 객체는 new 연산자로 생성자 함수 호출 가능.

console.log(Person.prototype);      // {constructor: f}

// 생성자 함수
function Person(name) {
    this.name = name;
}

// 화살표 함수는 non-constructor다.
const Person1 = name => {
    this.name = name;
};

console.log(Person1.prototype);      // undefined

// 함수 선언문은 런타임 이전에 JS엔진에 의해 먼저 실행된다.

// 객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재한다.
// 이후 생성자 함수 or 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다.
// 이로써 생성된 객체는 프로토타입을 상속받는다.

