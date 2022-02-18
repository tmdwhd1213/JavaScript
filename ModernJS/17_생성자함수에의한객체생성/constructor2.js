// 17.2.5. constructor 와 non-con의 구분
// constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수다.)
// non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수

// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 취급 X
const baz = {
    x: function() {}
};


// 일반 함수로 정의된 함수만이 constructor다
new foo();      // -> foo {}
new bar();      // -> bar{}
new baz.x();    // -> x{}

// 화살표 함수 정의
const arrow = () => {};

// new arrow();    // TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x() {}
};

// new obj.x();    // TypeError: obj.x is not a constructor.

// 생성자 함수가 되는 조건 : 1. new 연산자와 함께 호출하는 함수. 2. constructor이어야 한다.
// 생성자 함수를 호출하는 경우 함수 내부 객체 메서드 [[Call]]이 아닌, [[Constructor]]가 호출된다.

// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
    return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst);  // add {}

// 객체를 반환하는 일반 함수
function creatUser(name, role) {
    return { name, role };
}

// 일반 함수를 new 연산자와 함께 호출
inst = new creatUser('Oh', 'admin');
// 함수가 생성한 객체를 반환한다.
console.log(inst);      // {name: "oh", role: 'admin'}

// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다.
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * radius;
    };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
const circle = Circle(3);
console.log(circle);    // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius);    // 3
console.log(getDiameter());   // 6

// circle.getDiameter();
// TypeError: Cannot read property 'getDiameter' of undefined.

