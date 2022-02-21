// 'use strict';
// strict mode란?
function foo() {
  // 'use strict';

  x = 10;
}
foo();

console.log(x); // 10   --> strict mode: ReferenceError: x is not defined.
// 이러한 현상을 암묵적 전역(implicit global)이라 한다. 이는 예상치 못한 에러를 초래할 수 있다.
// 따라서 var, let, const 키워드를 사용하여 변수 선언을 해야한다.

// 잠재적인 오류를 발생시키기 어려운 환경을 만들고 그 환경에서 개발하는 것이 좋다.
// ES5에서 strict mode를 추가했다. --> 언어의 문법을 더 엄격하게 적용하여 오류 발생시킬 가능성이 높거나 js엔진의 최적화 작업에 문제를 일으킬만한
// 코드에 대해 명시적인 에러를 발생시킨다.

// ESLint 같은 린트 도구를 사용해도 유사한 효과를 얻을 수 있다.
// 정적 분석(static analysis)기능을 통해 소스코드를 실행하기 전에 스캔하여 문법적 오류뿐 아니라 잠재적 오류를 찾아내고
// 오류의 원인을 리포팅해주는 유용한 도구다.

// strict mode의 적용
// 전역의 선두(스크립트 전체), 함수 몸체의 선두(함수 전체)에 'use strict';를 추가한다.
// 전역에 strict mode를 하는 것은 피하자.
// 특히 외부 서드파티 라이브러리를 사용하는 경우 라이브러리가 non-strict-mode인 경우도 있기 때문이다.
// 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 선두에 strict mode를 적용한다.
(function () {
  "use strict";

  // Do something...
})();

// 함수 단위로 strict mode를 적용하는 것도 피하자
// 어떤 함수는 적용하고 안하고 하는 것은 바람직하지 않으며 모든 함수에 일일이 적용하는 것도 번거롭다.
// strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 문제가 발생할 수 있다.
(function () {
  // non-strict mode
  var let = 10; // 에러가 발생하지 않는다.

  function foo() {
    "use strict";

    // let = 20; // SyntaxError: Unexpected strict mode reserved word
  }
  foo();
})();

// 따라서 strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

// strict mode가 발생시키는 에러
// 5.1. 암묵적 전역: 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
(function () {
  // "use strict";

  y = 1;
  console.log(y); // ReferenceError: y is not defined.
})();

// 5.2. 변수, 함수, 매개변수의 삭제: delete 연산자로 삭제하면 SyntaxError가 발생한다.
(function () {
  "use strict";

  var z = 1;
  // delete z;     // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    // delete a;       // SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  // delete foo;           // SyntaxError: Delete of an unqualified identifier in strict mode.
})();

// 5.3. 매개변수 이름의 중복
(function () {
  // "use strict";

  // SyntaxError: Duplicate parameter name not allowed in this context
  function foo(i, i) {
    return i + i;
  }
  console.log(foo(1, 2));
})();

// 5.4. with 문의 사용
// with 문은 전달된 객체를 스코프 체인에 추가한다.
// with 문은 동일한 객체에 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만,
// 성능과 가독성이 나빠지는 문제가 있다. 따라서 with문은 사용하지 않는 것이 좋다.
(function () {
  // "use strict";

  // SyntaxError: Strict mode code may not include a with statement
  with ({ j: 1 }) {
    console.log(j);
  }
})();

// Strict mode 적용에 의한 변화

// 6.1. 일반 함수의 this
// strict mode에서 생성자 함수가 아닌 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 사용할 필요가 없기 때문. 에러 발생하지 않음.
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo {}
  }
  new Foo();
})();

// 6.2. arguments 객체
// strict모드에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // [Arguments] { 0: 3 }
})(3);
