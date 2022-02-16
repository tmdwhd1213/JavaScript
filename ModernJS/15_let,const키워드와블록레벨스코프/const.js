// const 키워드는 상수를 선언하기 위해 사용한다. 하지만 반드시 상수만을 위해 사용하지는 않는다.
// 대부분 let 과 비슷하니 다른 점을 찾아보자.

const { after } = require("lodash");

// 3.1. 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const foo = 1;
// const foo;       // SyntaxError: Missing initializer in const declaration

// 3.2. 재할당 금지
// var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.
const bar = 2;
// bar = 2;    // TypeError: Assignment to constant variable.

// 3.3. 상수 (재할당이 금지된 변수)
// const 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없다.
// 원시 값은 변경 불가능한 값이므로 재할당 외에는 변경할 방법이 없기 때문이다.

// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.

// const로 세율을 의미하는 상수를 만들자.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1; 

// 세전 가격
let preTaxPrice = 100;

// 세후 가격

// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
// let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);
console.log(afterTaxPrice);     // 110

// 3.4. const 키워드와 객체
// const로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
// 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.
const person = {
    name: 'Oh'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Seung';

console.log(person);    // {name: 'Seung'}
// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.
// 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다.

