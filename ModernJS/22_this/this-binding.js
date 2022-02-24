//this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 global을 가리킨다.
console.log(this); // {}

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 global을 가리킨다.
  // strict mode에서 일반함수 내부에서 this를 쓰면 undefined가 바인딩된다. 쓸 일이 없으니까.
  console.log(this); // global
  return number * number;
}
square(2);

const person = {
  name: "Oh",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // {name: "oh", getName: function}
    return this.name;
  },
};
console.log(person.getName()); // Oh

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // person {name: kim }
}

const you = new Person("kim");

// 함수 호출 방식과 this 바인딩

// 렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.
// 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다.
// 하지만 this바인딩은 함수 호출 시점에 결정된다.
/** 동일한 함수도 다양한 방식으로 호출할 수 있다.
 * 1. 일반 함수 호출
 * 2. 메서드 호출
 * 3. 생성자 함수 호출
 * 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
 */

// this 바인딩 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this); // log는 HTML과 같이 트리 구조로, dir은 JSON과 같은 트리구조로 출력한다.
};
foo(); // global

// 2. 메서드 호출: foo 함수를 내부 프로퍼티 값으로 할당하여 호출, this는 메서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // obj { foo: pfunction: foo] }

// 3. 생성자 함수 호출: new 연산자와 함께 생성자 함수로 호출, this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의해 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: "bar" };

foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar

// var 키워드로 선언한 전역 변수 value
var value = 1;

const object = {
  value: 100,
  foa() {
    console.log("foa's this: ", this); // foa's this:  { value: 100, foa: [Function: foa] }
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("callback's this: ", this); // global
      console.log("callback's this.value: ", this.value); // undefined
    }, 100);
    console.log("foa's this.value: ", this.value); // foa's this.value:  100

    // 메서드 내에 정의한 중첩 함수
    function baz() {
      console.log("baz's this: ", this); // baz's this:  <ref *1> Object [global]
      console.log("baz's this.value ", this.value); // baz's this.value  undefined
    }
    baz();
  },
};

object.foa();

// setTimeout 함수: 두 번째 인수로 전달한 시간(ms)만큼 대기한 다음, 첫 번째 인수로 전달한 콜백 함수를 호출하는 타이머 함수다.

// 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법은 다음과 같다.
var value = 1;

const obj1 = {
  value: 100,
  foo() {
    // this 바인딩(obj)을 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};

obj1.foo();

// Function.prototype.apply/call/bind 메서드 이용
const obj2 = {
  value: 100,
  foo() {
    // 콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(
      function () {
        console.log(this.value); // 100
      }.bind(this),
      100
    );
  },
};

obj2.foo();

// 화살표 함수를 이용한 this 바인딩
const obj3 = {
  value: 100,
  foo() {
    // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100); // 100
  },
};

obj3.foo();
