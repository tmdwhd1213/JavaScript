// 단축 평가 : 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 뜻함.

// 논리곱 연산자(&&)는 두 개의 피연산자가 모두 true일 때 true를 반환한다. 좌항에서 우항으로 진행됨.
console.log('cat' && 'dog') // 'dog' --> 하나라도 false 값이면 FALSE 값을 출력함. 
// 'cat'이 truthy값이지만 &&연산자는 2개 모두 평가해야한다. 따라서 둘 다 truthy값일 경우 마지막 피연산자를 출력하게 된다.

console.log('cat' || 'dog') // 'cat'
// 논리합(||)연산자는 둘 중 truthy값을 가질 때 true이므로 좌항에서 우항 순으로 먼저 truthy 값을 갖는 것을 출력하게 된다.

// 단축평가로 if문을 대체할 수 있다. 어떤 조건이 참 값일 때 무언가를 해야 한다면 &&연산자 표현식으로 대체 가능.
var done1 = true;
var message = '';

// 주어진 조건이 true일 때
if (done1) message = '완료';

// if문은 단축 평가로 대체 가능.
// done이 true라면 message에 '완료'를 할당
message = done1 && '완료';
console.log(message);   // 완료

// 조건이 거짓이면 ||연산자 표현식으로 가능.
var done2 = false;
var message = '';

// 주어진 조건이 false일 때
if(!done2) message = '미완료';

// 단축 평가
message = done2 || '미완료';
console.log(message);   // 미완료

// 삼항 조건 연산자는 (?:) if...else문을 대체 가능
var done3 = true;
var message = '';

// if...else 문
if(done3) message = '완료';
else message = '미완료';
console.log(message);   // 완료

// 삼항 조건 연산자
message = done3 ? '완료' : '미완료';
console.log(message);   // 완료

// 객체를 가리키기를 기대하는 변수가 null or undefined가 아닌지 확인하고 프로퍼티를 참조할 때.
var elem = null;
//var value = elem.value; // TypeError : Cannot read property 'value' of null
// 이 때 단축평가를 사용하면 에러 발생 X
var value = elem && elem.value;     // null


// 함수 매개변수에 기본값을 설정할 때
// 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.
// 단축평가를 이용해 매개변수의 기본값을 설정하면 undefined로 인한 에러가 발생X

// 단축평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();  // 0
getStringLength('hi');  // 2

// ES6의 매개변수의 기본값 설정
function getStringLength2(str = '') {
    return str.length;
}

getStringLength2();     // 0
console.log(getStringLength2('hello'));      // 5