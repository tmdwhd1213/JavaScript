// Function.prototype의 메서드이다.
// apply와 call 메서드는 this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다.

/**
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다.
 * @param thisArg - this로 사용할 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns 호출된 함수의 반환값
 */
// Function.prototype.apply(thisArg[, argsArray]);

/**
 * 주어진 this 바인딩과 ,로 구분된 인수 리스트를 사용하여 함수를 호출한다.
 * @param thisArg - this로 사용할 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
 */
// Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])

function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // global

// getThisBinding함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // { a: 1 }
console.log(getThisBinding.call(thisArg)); // { a: 1 }

// apply, call 메서드의 본질적인 기능은 함수를 호출하는 것이다.
// 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.
// apply와 call은 전달하는 방식만 다를 뿐 동작은 동일하다.

// getThis함수를 호출하면서 인수를 전달해보자.
function getThis() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체 위의 thisArg 상수 사용

// getThis 함수를 호출하면서 인수로 전달한 객체를 getThis함수의 this에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThis.apply(thisArg, [1, 2, 3]));
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// {a: 1}

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThis.call(thisArg, 1, 2, 3));
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// {a: 1}
