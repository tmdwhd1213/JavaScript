// 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값
var x = 2;

// 2 % 2은 0이고 이는 암묵적으로 false로 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result);    // 짝수

// 삼항조건연산자는 if...else문과 유사하게 사용할 수 있는데, if...else문은 표현식이 아닌 문이여서 값처럼 사용할 수 없다.
// 삼항조건연산자 표현식은 값으로 평가할 수 있는 표현식인 문이므로 값처럼 사용할 수 있어 유용하게 사용할 수 있다.
//var result2 = if (x % 2) { result2 = '홀수'; } else { result2 = '짝수'; }; // Syntax Error