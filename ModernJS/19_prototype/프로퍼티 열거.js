// 14.1. for...in 문
// 객체의 모든 프로퍼티를 순회하며 열거하려면 for...in문을 사용한다.

// for (변수선언문 in 객체) {...}

const person = {
    name: 'Oh',
    address: 'Seoul',
    __proto__: { age: 28 }
};

// for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for (const key in person) {
    // 객체 자신의 프로퍼티인지 확인한다.(__proto__에 대한 질문)
    if (!person.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person[key]);
}
// name: oh
// address: Seoul
// age: 28      --> if문 이후로 상속받은 프로퍼티라 반환X.


// for...in문은 in 연산자처럼 상속받은 프로토타입의 프로퍼티까지 열거한다.
// 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
// 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 fasle기 때문이다. (열거할 수 없도록 정의됨.)
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
/*
{
  value: [Function: toString],
  writable: true,
  enumerable: false,
  configurable: true
}
*/

// for..in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 
// [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.

// for...in문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const key in obj) {
    console.log(key + ': ' + obj[key]);
}
// a: 1

// for...in 문은 순서대로 열거되지 않는다. 하지만 대부분의 모던 브라우저에서는 순서를 보장하고 숫자인 키에 대해서는 정렬을 실시한다.
const object = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a',
};

for (const key in object) {
    if (!object.hasOwnProperty(key)) continue;
    console.log(key + ': ' + object[key]);
}
/*
1: 1
2: 2
3: 3
b: b
a: a
*/

// 배열에는 for...in문 사용 X.
// 일반적인 for문, for...of문, Array.prototype.forEach메서드를 사용하길 권장한다.
// 사실 배열도 객체이므로 프로퍼티와 상속받은 프로퍼티가 포함될 수 있다.
const arr = [1, 2, 3];
arr.x = 10;     // 배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
    // 프로퍼티 x도 출력한다.
    console.log(arr[i]);    // 1 2 3 10
};

// arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    // 1 2 3
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(v => console.log(v));       // 1 2 3

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
    console.log(value);             // 1 2 3
};

// 14.2. Object.keys/values/entries 메서드
// 객체 자신의 고유 프로퍼티를 열거하기 위해서는 for...in문 보다는 Object.keys/values/entries 메서드를 권장한다.

// Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
const human = {
    name: 'oh',
    address: 'seoul',
    __proto__: { age: 28 }
};

console.log(Object.keys(person));       // [ 'name', 'address' ]

// ES8에서 도입된 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.
console.log(Object.values(person));     // [ 'Oh', 'Seoul' ]

// ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값 쌍의 배열을 배열에 담아 반환한다.
console.log(Object.entries(person));    // [ [ 'name', 'Oh' ], [ 'address', 'Seoul' ] ]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name Oh
address Seoul
*/