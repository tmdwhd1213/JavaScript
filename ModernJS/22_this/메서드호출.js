// 2.2. 메서드 호출
// 메서드 내부의 this에는 메서드 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다.
// 주의할 것은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것이다.
const person = {
  name: "oh",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // oh

// 메서드는 프로퍼티에 바인딩된 함수다.
// person 객체에 포함된 것이 아닌 독립적으로 존재하는 별도의 객체다.
// 따라서 다른 객체의 메서드가 될 수도 있고 일반 변수에 할당하여 일반 함수로 호출할 수도 있다.

const anotherPerson = {
  name: "kim",
};
// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anoterPerson이다.
console.log(anotherPerson.getName()); // kim

// getName 메서드를 변수에 할당
const getName = person.getName;

// getName 메서드를 일반 함수로 호출
console.log(getName()); // '' -> Node에선 undefined
// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.

// 프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩된다.
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Lee");

// 1. getName 메서드를 호출한 객체는 me다.
console.log(me.getName()); // Lee

Person.prototype.name = "Sa";

// 2. getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName()); // Sa

// 2번의 경우 getName 메서드를 호출한 객체는 Person.prototype이다. 이도 객체이므로 직접 메서드를 호출할 수 있다.
// 따라서 getName 메서드 내부의 this는 Person.prototype을 가리키며 this.name은 'Sa'이다.

// 2.3. 생성자 함수 호출
// 생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// 생성자 함수 new 안 붙이고 -> 일반 함수의 호출로 동작
// 일반 함수 new 붙이고 -> 생성자 함수의 호출로 동작
