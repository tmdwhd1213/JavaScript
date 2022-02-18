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

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출된다.
const circle5 = Circle(20);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle5);       // undefined

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius);        // 20

// 17.2.3. 생성자 함수의 인스턴스 생성 과정
// 생성자 함수
function Circle2(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle10 = new Circle2(5);    // 반지름이 5인 Circle2 객체를 생성

// 암묵적으로 생성자 함수에 의해 빈 객체(인스턴스)가 생성되고 this에 바인딩된다.
// 바인딩이란 식별자와 값을 연결하는 과정. 예를 들어 변수 선언은 변수이름과 메모리 주소를 바인딩하는 것이다.
// this 바인딩은 this가 가리키는 객체를 바인딩하는 것.

function Cir2(rad) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this);  // Cir2{}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.rad = rad;
    this.getDiameter = function() {
        return 2 * this.rad;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 만약 this가 아닌 다른 객체를 명시적으로 반환하면 return문에 명시한 객체가 반환된다.
    //  return {}; ----> console.log(cir2); // {} 출력

    // 명시적으로 원시 값을 반환하면 무시되고 암묵적으로 this가 반환된다.
    return 100; // 무시
}

// 인스턴스 생성. Cir2 생성자 함수는 암묵적으로 this를 반환한다.
const cir2 = new Cir2(1);
console.log(cir2);  // Cir2 { rad: 1, getDiameter: [Function (anonymous)] }

//17.2.4. 내부 메서드 [[Call]]과 [[Construct]]
// 함수는 객체다
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function() {
    console.log(this.prop);
};

foo.method();   // 10
// 일반 객체는 호출할 수 없지만, 함수는 호출할 수 있다.

// 일반적인 함수로서 호출: [[call]]이 호출된다.
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo();

// 함수 객체는 callable + non-constructor(일반함수로만 호출할 수 있는 객체) 또는 callable + constructor(일반, 생성자 함수 호출 객체)가 있다.

