// ES11(2020)에 도입된 null병합 연산자 (??)는 좌항의 피연산자가 null or undefined인 경우 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환한다. null 병합 연삽자 ??는 변수에 기본값을 설정할 때 유용하다.
//좌항의 피연산자가 null or undefined면 우항의 피연산자 반환
// 그렇지 않다면 좌항의 피연산자 반환
var foo = null ?? 'default string';
console.log(foo);   // default string

// ES11 이전에는 ||를 이용해 같은 결과를 도출했는데, 0 or ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo);   // default string;
// null병합 연산자 ??는 null, undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
var foo = '' ?? 'default string';
console.log(foo);   // ''