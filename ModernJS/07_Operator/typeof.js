console.log(typeof '');             // string
console.log(typeof 1);              // number
console.log(typeof NaN);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof Symbol());       // symbol
console.log(typeof null);           // object   자바스크립트의 버그 >> typeof가 아닌 일치연산자(===)를 사용하자.
console.log(typeof []);             // object
console.log(typeof {});             // object
console.log(typeof new Date());     // object
console.log(typeof /test/gi);       // object
console.log(typeof function() {});  // function
console.log();
console.log();

// 또 한가지 주의 사항 : 선언하지 않은 식별자를 typeof 연산자로 연산하면 ReferenceError가 아닌 undefined를 반환함.
console.log(typeof undeclared);  // undefined