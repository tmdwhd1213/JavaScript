// JS에는 모든 값에 타입이 있는데 이를 개발자의 의도에 따라 바꿀 수 있다. 이를 명시적 타입 변환(Explicit coercion) or Type Casting이라고 한다.

var x = 10;

// 명시적 타입 변환. 숫자를 문자열로 타입 캐스팅
var str = x.toString();
console.log(typeof str, str);   // string 10

// x 변수의 값이 바뀐 것은 아니다.
console.log(typeof x, x);   // number 10

// 개발자의 의도와 상관없이 JS엔진에서 암묵적으로 타입이 변환되는 것을 암묵적 타입 변환(implicit coercion) or Type Coercion이라 한다.

var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성.
var str = x + '';
console.log(typeof str, str);   // string 10

// x 변수의 값이 변한 것은 아니다.
console.log(typeof x, x);       // number 10


// 암묵적 타입 변환은 표현식이 끝나면 아무도 참조하지 않으므로 가비지 콜렉터에 의해 메모리에서 해제된다.
// 명시적 타입 변환만 사용하고 암묵적 타입 변환을 사용하지 않는 것은 바람직하지 않다. 오히려 암묵적이 가독성이 더 좋을 수 있으므로.
// 따라서 코드를 예측할 수 있어야 한다.

// 9.2.1. 문자열 타입 변환
// +연산자는 하나 이상의 문자열이 있을 경우 다른 것도 문자열로 취급한다.
console.log(typeof(1 + '2'), 1 + '2');   // string 12

// 9.2.2. 숫자 타입 변환
// +를 제외한 산술 연산자가 포함되어있는 경우 숫자 취급을 한다.
console.log(typeof(1 - ''), 1 + '');    // number 1 --> ''공백문자열은 0으로 취급

// 숫자만 들어있는 문자열도 앞에 +기호를 붙이면 숫자로 취급.
console.log(typeof(+'2'), 2);  // number 2

console.log(+'string');        // NaN ---> 문자가 들어있는 문자열은 숫자가 아니므로 NaN.
console.log(+undefined);      // NaN
//symbol()타입은 TypeError : Cannot Convert a Symbol value to a number.

// 객체 타입
console.log(+{});           // NaN
console.log(+[]);           // 0
console.log(+[10, 20]);     // NaN
console.log(+function(){}); // NaN


// 9.2.3. 불리언 타입으로 변환
// JS엔진은 불리언 타입이 아닌 값을 Truthy value OR Falsy value로 구분하는데, Falsy를 제외한 것들은 전부 Truthy이다.
/*
false
undefined
null
0, -0
NaN
''(빈 문자열)
*/
