const v = 1;
// 깊은 복사
const deepCopy = v;
console.log(deepCopy === v);    // true

const z = { x: 1 };
// 얕은 복사
const shallowCopy = z;
console.log(shallowCopy === z); // true



const o = { x: { y: 1}};

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o);  // false
console.log(c1.x === o.x);  // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 설치 후, Node.js 환경에서 실행
const _ = require('lodash');
// 깊은복사
const c2 = _.cloneDeep(o);
console.log(c2 === o);  // false
console.log(c2.x === o.x);  // false

// 참조에 의한 전달
var person = {
    name: 'Lee'
};

// 참조 값을 얕은 복사
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person);   // true

copy.name = 'Oh';

person.address = 'Anyang';

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person);    // {name: 'Oh', address: 'Anyang'}
console.log(copy);      // {name: 'Oh', address: 'Anyang'}

// 같은 프로퍼티의 다른 이름의 객체
var person1 = {
    name: 'oh'
};

var person2 = {
    name: 'oh'
};

console.log(person1 === person2);   // false 
console.log(person1.name === person2.name);     // true
// 결론 : 객체 자체가 같은 것은 아니나, 프로퍼티의 키와 벨류가 같다면 같다고 판단한다. (값으로 평가될 수 있는 표현식)
