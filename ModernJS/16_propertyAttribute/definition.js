// 프로퍼티 정의 : 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 어트리뷰트를 재정의하는 것을 말한다.
// 이를 통해 객체의 프로퍼티가 어떻게 동작해야 하는지를 명확히 정의할 수 있다.

// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 
// 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'SeungJong',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Oh'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);   // firstName { value: 'SeungJong', writable: true, enumerable: true, configurable: true }

// 디스크립터 객체의 프로퍼티를 누락시키면  undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);    // lastName { value: 'Oh', writable: false, enumerable: false, configurable: false }

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person));   // [ 'firstName' ]

// [[Writable]]의 값이 false인 경우 [[Value]]의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = 'kim';    // 무시

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;     // 무시

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true });
// Uncaught TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);    // fullName { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }

person.fullName = 'GyoungSuk Sa';
console.log(person);                    // { firstName: 'GyoungSuk', fullName: [Getter/Setter] }

// definePropert"ies" 메서드는 여러 개의 프로퍼티를 한 번에 정의할 수 있다.
/*
const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'SeungJong',
        writable: true,
        ...
    },
    lastName: {
        value: 'Oh',
        ...
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        //getter 함수
        get() {
            return `{$this.firstName} {$this.lastName}`;
        },
        //setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        ...
    }
});

person.fullName = 'SeungAh Oh'
console.log(person);    // {firstName: 'SeungAh', lastName: "Oh"}
*/

