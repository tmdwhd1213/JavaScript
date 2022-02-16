// 객체는 변경 가능한 값, 즉 프로퍼티를 추가/삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며,
// Object.defineProperty or ties 메서드를 사용해 프로퍼티 어트리뷰트를 재정의할 수도 있다.

// JS는 객체의 변경을 방지하는 다양한 메서드를 제공한다.
/*
                                            프로퍼티 추가 , 삭제 , 값 읽기 , 값 쓰기 , 어트리뷰트 재정의
객체 확장 금지 : Object.preventExtensions           X       O       O           O           O
객체 밀봉 : Object.seal                             X       X       O           O           X
객체 동결 : Object.freeze                           X       X       O           X           X
*/

// 5.1. 객체 확장 금지
// Object.preventExtensions 메서드는 객체의 확장을 금지한다. ---> 프로퍼티 추가 금지
// 프로퍼티는 동적 추가와 Object.defineProperty 메서드로 추가할 수 있는데 이 두 가지 모두 금지된다.
// 확장 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.
const person = { name: 'Oh' };

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person));   // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person));   // false

// 프로퍼티 추가가 금지된다.
person.age = 20;    // 무시. strict mode에서는 Error.
console.log(person);    // {name: 'Oh'}

// 프로퍼티 추가는 금지되지만, 삭제는 가능하다.
delete person.name;
console.log(person);    // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
// Object.defineProperty(person, 'age', {value: 20});  // TypeError: Cannot define property age, object is not extensible

// 5.2. 객체 밀봉
// Object.seal 메서드는 객체를 밀봉한다. 객체 밀봉이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지를 의미한다.
// 즉, 밀봉된 객체는 읽기와 쓰기만 가능하다.
// 밀봉의 여부는 Object.isSealed 메서드로 확인할 수 있다.

const person1 = {name: 'Oh'};

// person 객체는 밀봉된 객체가 아니다.
console.log(Object.isSealed(person1));   // false

// 밀봉
Object.seal(person1);
console.log(Object.isSealed(person1));  // true

// 밀봉된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person1));
// {name: { value: 'Oh', writable: true, enumerable: true, configurable: false }}

// 프로퍼티 추가, 삭제 금지
person1.age = 20;    // 무시
console.log(person1);    // {name: 'oh'}

delete person1.name;     // 무시
console.log(person1);    // {name: 'oh'}

// 프로퍼티 값 갱신은 가능
person1.name = 'Kim';
console.log(person1);    // {name: kim}

// 프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person1, 'name', { configurable: true});  // TypeError

// 5.3. 객체 동결 : Object.freeze 메서드는 객체를 동결한다. 프로퍼티 추가 및 삭제, 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미
// 즉 동결된 객체는 읽기만 가능하다.
// 동결된 객체인지 여부는 Object.isFrozen 메서드로 확인할 수 있다.
const person2 = { name: 'oh'};
console.log(Object.isFrozen(person2));  // false

// 동결
Object.freeze(person2);
console.log(Object.isFrozen(person2));  // true

// 동결된 객체는 writable과 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person2));
// { name: { value: 'oh', writable: false, enumerable: true, configurable: false }}

// 프로퍼티 추가가 금지된다.
person2.age = 20;    // 무시. strict mode면 에러
console.log(person2);    // {name: 'Oh'}

// 프로퍼티 삭제가 금지
delete person2.name;    // 무시. strict mode면 에러
console.log(person2);   // {name: 'Oh'}

// 프로퍼티 값 갱신 금지
person2.name = 'kim';   // 무시. strict mode면 에러
console.log(person2);   // {name: 'Oh'}

// 프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person2, 'name', { configurable: true });
// TypeError: Cannot redefine property: name

// 5.4. 불변 객체
// 위의 메서드는 얕은 변경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지 못한다.
// 따라서 Object.freeze 메서드로 객체를 동결해도 중첩 객체까지 동결할 수 없다.
const person3 = {
    name: 'Oh',
    address: { city: 'Anyang' }
};

// 얕은 객체 동결
Object.freeze(person3);

// 직속 프로퍼티만 동결
console.log(Object.isFrozen(person3));  // true
// 중첩 객체 동결X
console.log(Object.isFrozen(person3.address));  // false

person3.address.city = 'Busan';
console.log(person3);   // {name: 'oh', address: {city: 'Busan'}}

// 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는
// 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.
function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if(target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
    /*
    모든 프로퍼티를 순회하며 재귀적으로 동결한다.
    Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
    forEach 메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백 함수를 실행한다.
    */
   Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person4 = {
    name: 'Oh',
    address: {city: 'Anyang'}
};

// 깊은 객체 동결
deepFreeze(person4);

console.log(Object.isFrozen(person4));   // true
// 중첩 객체까지 동결한다.
console.log(Object.isFrozen(person4.address));   // true

person4.address.city = 'Busan';
console.log(person4);   // {name: 'Oh', address: {city: Anyang}}
