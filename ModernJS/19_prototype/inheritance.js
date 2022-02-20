// 상속 : 한 객체의 프로퍼티나 메서드를 다른 객체에서 그대로 사용할 수 있는 것. --> 불필요한 중복을 제거할 수 있다.(코드의 재사용)

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        // Math.PI는 원주율을 나타내는 상수다.
        return Math.PI * this.radius ** 2;
    };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea);   // false    

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566...

// 상속을 통해 중복을 제거할 수 있고, JS는 프로토타입을 기반으로 상속을 구현한다.

// 생성자 함수
function Cir(radius) {
    this.radius = radius;
}

// Cir 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Cir 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Cir.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const cir1 = new Cir(1);
const cir2 = new Cir(2);

// Cir 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Cir.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Cir 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(cir1.getArea === cir2.getArea);     // true