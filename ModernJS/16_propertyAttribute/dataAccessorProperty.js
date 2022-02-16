// Data Property: 키와 값으로 구성된 일반적인 프로퍼티다.
// Accessor Property: 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.
/*
[[Value]] : 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
            프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당한다. 이때 프로퍼티가 없으면 동적 생성하고 
            생성된 프로퍼티의 [[Value]]값을 저장한다.

[[Writable]] : 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
                [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다.

[[Enumerable]] : 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
                    [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in문이나 Object.keys 메서드 등으로 열거할 수 없다.

[[Configurable]] : 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
                    [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다.
                    단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.
*/

// 3.2. 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티이다.
/*
[[Get]] : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수다.
            즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 
            즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.

[[Set]] : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다.
            즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 
            즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.

[[Enumerable]] : 데이터 프로퍼티와 같다.

[[Configurable]] : 데이터 프로퍼티와 같다.
*/

const person = {
    // 데이터 프로퍼티
    firstName: 'SeungJong',
    lastName: 'Oh',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당: "31.1 배열" 참조
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName);  // SeungJong Oh

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'GyoungSuk Sa';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);   // GyoungSuk Sa

// fistName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);    //{ value: 'GyoungSuk', writable: true, enumerable: true, configurable: true }

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);    // { get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true }

/*
접근자 프로퍼티 fullName으로 프로퍼티 값에 접근하면 내부적으로 [[Get]] 내부 메서드가 호출되어 다음과 같이 동작한다.

1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 or 심벌이어야 한다. 프로퍼티 키 "fullName"은 문자열이므로 유효하다.
2. 프로토타입 체인에서 프로퍼티를 검색한다. person 객체에 fullName 프로퍼티가 존재한다.
3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. fullName 프로퍼티는 접근자 프로퍼티다.
4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다.
프로퍼티 fullName의 어트리뷰트 [[Get]]의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 객체의 get 프로퍼티 값과 같다.
*/

// 프로토타입 : 어떤 객체의 상위(부모) 객체의 역할을 하는 객체다. 프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속한다.
//              프로토타입 객체나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 or 메서드인 것처럼 자유롭게 사용할 수 있다.

// 프로토타입 체인 : 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.
//                  객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 or 메서드가 없다면 프로토타입 체인을 따라
//                  프로토타입의 프로퍼티나 메서드를 차례대로 검색한다.

// 접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법은 다음과 같다.
// 일반 객체의 __proto__는 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/*
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/

// 함수 객체의 prototype은 데이터 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));
// { value: {}, writable: true, enumerable: false, configurable: false }