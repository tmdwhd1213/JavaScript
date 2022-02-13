// ES11(2020)에서 도입된 옵셔널 체이닝(?.)은 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고,
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var elem = null;

// elem이 null or undefined면 undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined

// &&는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undef, null, 0 ,-0, NaN, '')이면 좌항 피연산자를 그대로 반환.
// 좌항 피연산자가 Falsy 값인 0이나 ''인 경우도 마찬가지인데, 이 둘은 객체로 평가될 때도 있다.
var str = '';

// 문자열의 길이를 참조한다.
var length = str && str.length;

// 문자열의 길이를 참조하지 못한다.
console.log(length);    // ''


//옵셔널 체이닝 .? 을 쓰면 위와 같은 상황이라도 null or undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length);    // 0