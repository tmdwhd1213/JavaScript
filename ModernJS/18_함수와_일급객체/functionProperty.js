function square(number) {
    return number * number;
}

console.dir(square);
console.log(Object.getOwnPropertyDescriptors(square));
/*
{
  length: { value: 1, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'square',
    writable: false,
    enumerable: false,
    configurable: true
  },
  arguments: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  caller: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
*/

// __proto__는 square함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));  // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }

// 18.2.1. arguments 프로퍼티
// 함수 객체의 arguments 프로퍼티 값은 arguments 객체다. 
// arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.
// 즉, 함수 외부에서는 참조할 수 없다.
// JS는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않으므로 달라도 에러가 발생하지 않는다.

function multiply(x, y) {
    console.log(arguments); 
    return x * y;
}

console.log(multiply());        // [Arguments] {} NaN
console.log(multiply(1));       // [Arguments] {'0': 1 } NaN
console.log(multiply(1, 2));    // [Arguments] {'0': 1, '1': 2 } 2
console.log(multiply(1, 2, 3)); // [Arguments] {'0': 1, '1': 2, '2': 3 } 2

// 선언된 매개변수의 개수와 함수를 호출할 때 전달하는 인수의 개수를 확인하지 않는 JS의 특성 때문에 함수가 호출되면 인수 개수를
// 확인하는 것이 필요할 수도 있다. 이때 arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현하므로 유용하다.
function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다.
    for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;

}

console.log(sum());         // 0
console.log(sum(1, 2));     // 3
console.log(sum(1, 2, 3));  // 6
