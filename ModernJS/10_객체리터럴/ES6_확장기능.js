// 1. 프로퍼티 축약 표현
// 객체 리터럴의 프로퍼티는 키와 값으로 구성된다. 프로퍼티 값은 변수에 할당된 값, 즉 식별자 표현식일 수도 있다.
// ES5
var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj);   // {x: 1, y: 2}

// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
// 이때 프로퍼티 키는 변수 이름으로 자동 생성된다.

// ES6
let a = 3, b = 4;

// 프로퍼티 축약 표현
const obj2 = {a, b};

console.log(obj2);       // {i: 3, j: 4}

// 2. 계산된 프로퍼티 이름
// 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있도.
// 단, 프로퍼티 키로 사용할 표현식을 대괄호[]로 묶어야 한다. 이를 계산된 프로퍼티 이름이라 한다.
// ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호[]표기법을 사용해야 한다.

// ES5
var prefix = 'prop';
var i = 0;

var obj = {};
// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);   // {prop-1: 1, prop-2: 2, prop-3: 3}


//  ES6
const prefix2 = 'prop';
let j = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const object = {
    [`${prefix2}-${++j}`]: j,
    [`${prefix2}-${++j}`]: j,
    [`${prefix2}-${++j}`]: j
};

console.log(object);


// 메서드 추가 표현

// ES5
var obj_m5 = {
    name: 'Oh',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj_m5.sayHi();    // Hi! Oh

// ES6
const obj_m6 = {
    name: 'Oh',
    // 메서드 축약 표현
    sayHi() {
        console.log(`Hello! ` + this.name);
    }
};

obj_m6.sayHi();     // Hello! Ohs