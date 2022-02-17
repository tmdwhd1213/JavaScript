// 객체 리터럴에 의한 객체 생성 방식의 문제점.
// 단 하나의 객체만 생성한다. 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 비효율적이다.
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter()); // 20

// getDiameter 메서드는 완벽히 동일하고 다른 점은 반지름 값 뿐이다.
// 만약 수 십개의 객체를 생성해야 한다면 문제가 크다.

// 2.2. 생성자 함수에 의한 객체 생성 방식의 장점
// 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여
// 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle3 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle4 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle3.getDiameter()); // 10
console.log(circle4.getDiameter()); // 20

/*
this: 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이다. this가 가리키는 값, 즉 this바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
1. 일반 함수로서 호출 : 전역 객체
2. 메서드로서 호출 : 메서드를 호출한 객채(마침표 앞의 객체)
3. 생성자 함수로서 호출 : 생성자 함수가 (미래에) 생성할 인스턴스
*/

// 함수는 다양한 방식으로 호출될 수 있다.
function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에선 window, Node.js에서는 global을 가리킨다.
foo();  // global

const obj = { foo };    // ES6 프로퍼티 축약 표현 --> {foo: foo}

// 메서드로서 호출
obj.foo();      // {foo: [Function: foo]}

// 생성자 함수로서 호출
const inst = new foo();     // foo {}