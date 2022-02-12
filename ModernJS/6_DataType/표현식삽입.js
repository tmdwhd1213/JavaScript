var first = 'Seung-Jong';
var last = 'Oh';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');  // My name is Seung-Jong Oh.

// ES6 : 표현식 삽입
console.log(`My name is ${first} ${last}.`);    // My name is Seung-Jong Oh.

console.log(`1 + 2 = ${1 + 2}`);    // 1 + 2 = 3

console.log('1 + 2 = ${1 + 2}');    // 1 + 2 = ${1 + 2}