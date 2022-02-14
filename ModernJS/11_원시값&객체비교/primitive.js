// 원시 값(primitive) : string, number, bigint, boolean, undefined, symbol, null 7가지
// 객체, 배열, 함수는 변형되지만, 원시값은 변하지 않는다.

// 원시값 예
var bar = "baz";
console.log(bar);       // baz
bar.toUpperCase();
console.log(bar);       // baz

// 배열 변형
var foo = [];
console.log(foo);       // []
foo.push("foz");
console.log(foo);       // ['foz']

// 원시값은 교체할 수 있지만, 직접 변형은 X. 이 방법은 원시 값에 새로운 값을 재할당하는 것.
bar = bar.toUpperCase();
console.log(bar);   // BAZ
// 메모리 공간에 변수 bar의 주소가 생김(최초 변수 선언에 undefined) -> 변수 bar가 가리키는 값(baz)의 주소가 할당 됨. -> 
// baz의 주소는 그대로인데 .toUpperCase()로 바꾼 값(BAZ)은 새로운 주소에 할당되며 변수 bar는 그것을 가리킨다.(baz는 없어지는 것이 아님.)


// 유사 배열 객체 : 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
//      문자열은 마치 배열처럼 인덱스를 통해 각 문자에 접근할 수 있으며, length 프로퍼티를 갖기에 for문으로 순회할 수도 있다.
var str = 'string';

console.log(str[0]);    // s

// 원시값인 문자열이 객체처럼 동작한다.
console.log(str.length);    // 6
console.log(str.toUpperCase());     // STRING

// 인덱스를 이용해 각 문자에 접근해서 변경하려해도 변경되지 않는다. 원시값은 읽기 전용이기 때문이다.
str[0] = 'E';       // 예상 ---> 'Etring '
console.log(str);   //  결과 ---> 'string'