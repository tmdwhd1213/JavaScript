// 13.1. in 연산자
// in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.

/*
key: 프로퍼티 키를 나타내는 문자열
object: 객체로 평가되는 표현식
* key in object
*/

const person = {
    name: 'Oh',
    address: 'Anyang'
};

// person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person);      // true
console.log('address' in person);   // true
console.log('age' in person);       // false

// in 연산자는 프로퍼티 뿐만 아니라 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요하다.
// person 객체는 toString이라는 프로퍼티가 없지만 true값이 나온다.
console.log('toString' in person);  // true
// toString은 Object.prototype의 메서드다.

// ES6에서 도입된 Reflect.has 메서드는 in과 동일하게 동작한다.
console.log(Reflect.has(person, 'name'));       // true
console.log(Reflect.has(person,'age'));         // false


// 13.2. Object.prototype.hasOwnProperty 메서드
console.log(person.hasOwnProperty('name'));     // true
console.log(person.hasOwnProperty('age'));      // false

// 객체 고유의 프로퍼티인 경우에만 true값을 반환하고 없는 프로퍼티나 상속받은 프로토타입의 프로퍼티일 경우 false를 반환한다.
console.log(person.hasOwnProperty('toString'));     // false

