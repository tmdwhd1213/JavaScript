// 프로퍼티 키는 값에 접근할 수 있는 이름으로서 식별자 역할을 한다.
// 식별자 네이밍 규칙을 준수하는 이름인 경우 따옴표를 생략할 수 있다.
// 반대로 말하면 식별자 네이밍 규칙을 따르지 않은 이름에는 반드시 따옴표를 사용해야 한다.
// 가급적 네이밍 규칙을 준수하는 것을 권장한다.
var person = {
    firstName : 'seung-jong',   // 규칙 준수 O
    'last-name' : 'Oh'          // 규칙 준수 X
};

console.log(person);        // {firstName : "seung-jong", 'last-name' : "oh"}
// last-name의 경우 따옴표를 쓰지 않을 경우 -연산자로 인식한다.

// 문자열 or 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
// 이 경우에는 프로퍼티 키로 사용할 표현식을 대괄호[]로 묶어야 한다.
var obj = {};
var key = 'hello';

// ES5 : 프로퍼티 키 동적 생성
obj[key] = 'world';

// ES6 : 계산된 프로퍼티 이름
// var obj = {[key]: 'world'};

console.log(obj);   // {hello: "World"}

// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다.
// 에러가 발생하지 않으니 주의하자!
var foo = {
    name : 'Oh',
    name : 'Kim'
};

console.log(foo);   // {name : 'kim'}

// 프로퍼티에 접근하는 법은 두 가지이다.
var person = {
    name : 'Seung'
};
// 1. 마침표 표기법
console.log(person.name);   // seung
// 2. 대괄호 표기법. 대괄호 안에 마침표로 묶어줘야 한다. 주의!
console.log(person['name']);    // seung
// 대괄호 프로퍼티 접근 연산자 내에 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면 JS엔진은 식별자로 해석한다.
// console.log(person[name]);       // ReferenceError: name is not defined.

var person = {
    'last-name' : 'Oh',
    1 : 10
};

// person.'last-name';   // SyntaxError : Unexpected string
// person.last-name;   // 브라우저에서 --> NaN, Node.js에서 --> ReferenceError : name is not defined
// person[last-name];   // ReferenceError: last is not def
console.log(person['last-name']);    // 'oh'

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
// person.1;   // SyntaxError: unexpected number
// person.'1'; // SyntaxError: unexpected string
person[1];  // 10 : person[1] --> person['1']
person['1'] // same


// 프로퍼티 값 갱신
var person = {
    name : 'Lee'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Oh';

console.log(person);    // {name : "Oh"};

// 프로퍼티 삭제 : delete 연산자는 객체의 프로퍼티를 삭제한다. delete연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야한다.
// 만약 존재하지 않으면 아무런 에러 없이 무시된다.
var person = {
    name: 'kim'
};

// 프로퍼티 동적 생성
person.age = 28;

// 갱신
person.name = 'Oh';

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// delete연산자로 삭제할 수 없고 에러는 발생하지 않으며 무시된다.
delete person.address;

console.log(person);    // {name: 'Oh'}