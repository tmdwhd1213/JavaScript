// 변수는 선언에 의해 생성되고 할당을 통해 값을 갖는다. 그리고 언젠가 소멸한다.
// 전역 변수의 생명주기 = 애플리케이션의 생명주기, 함수 내부의 변수 = 호출되면 생성, 함수 종료되면 소멸
function foo() {
    var x = 'local';
    console.log(x);     // local
    return x;
}

foo();
// console.log(x);         // ReferError

// 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 or 그 메모리 공간을 식별하기 위해 붙인 이름이다.
// 따라서 변수의 생명 주기는 메모리 공간이 확보된 시점부터 메모리 공간이 해제되어 가용 메모리 풀에 반환되는 시점까지다.

var x = 'global';

function bar() {
    console.log(x);     // undefined. --> 함수가 실행되기 전에 undefined로 초기화하고 변수 할당문은 밑에 있으니까.
    var x = 'local';
}

bar();

// 전역 객체 : 코드가 실행되기 이전 단계에 JS 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다. 
// 전역 객체는 클라이언트 사이드(브라우저)에서는 window, 서버 사이드(Node.js)에서는 global 객체를 의미한다.
// 환경에 따라 전역객체를 가리키는 다양한 식별자(window, self, this, frames, global)가 존재했으나,
// ES11에서 globalThis로 통일되었다.

// 전역 객체는 표준 빌트인 객체(Object, String, Number, Function, Array ...)와 환경에 따른 호스트 객체(클라이언트 web API or Node.js의 호스트API)
// , 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.
// 브라우저 환경에서 전역 객체는 window이므로 브라우저 환경에서 var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
// 전역 객체 window는 웹페이지를 닫을 때까지 유효하고 var 키워드로 선언한 전역 변수도 마찬가지이다.
// 즉, var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명주기와 일치한다.

// 14.2. 전역 변수의 문제점.
/*
1. 전역 변수를 선언한 의도는 어디서든 참조하고 할당하겠다는 것인데, 이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용하는 것.
유효 범위가 클수록 가독성이 나빠지고 의도치 않은 동작을 할 수도 있다.

2. 전역 변수는 생명 주기가 길다. 따라서 메모리 리소스도 오랜 기간 소비하고 전역 변수의 상태를 변경할 수 있는 시간이 길고 기회도 많다.
더욱이 var 키워드는 변수의 중복 선언을 허용하므로 생명 주기가 긴 전역 변수는 변수 이름이 중복될 가능성이 있다.(의도치 않은 재할당 위험)

3. 전역 변수는 스코프 체인 상에서 종점에 존재한다. 이는 변수를 검색할 때 전역 변수가 가장 마지막에 검색된다는 것을 말한다.
즉, 전역 변수의 검색 속도가 가장 느리다.

4. JS의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다.
따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.
*/

// 14.3. 전역 변수의 사용을 억제하는 법.
/*
전역 변수를 받스시 사용해야 할 이유를 찾지 못했다면 지역 변수를 사용해야 한다. 변수의 스코프는 좁을수록 좋다.
*/

// 14.3.1. 즉시 실행 함수 
// 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.

(function() {
    var foo = 10;   // 즉시 실행 함수의 지역 변수
    //...
}());

// console.log(foo);    // referenceError : foo is ~
// 이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.

// 14.3.2. 네임스페이스 객체
// 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 법.
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'Oh';

console.log(MYAPP.name);       // Oh

// 네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 네임스페이스를 계층적으로 구성할 수도 있다.

MYAPP.person = {
    name: 'Seung',
    address: 'Anyang'
};

console.log(MYAPP.person.address);
// 네임스페이스를 분리해서 식별자 충돌을 방지하는 효과는 있으나 네임스페이스 객체 자체가 전역 변수에 할당되므로 유용하진 않다.

// 14.3.3. 모듈 패턴
// 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
// 모듈 패턴은 JS의 강력한 기능인 클로저를 기반으로 동작한다.
// 캡슐화는 객체의 상태를 나타내는 프로퍼티와 그를 참조하고 조작할 수 있는 동작 메서드를 하나로 묶는 것을 말한다.
// 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라 한다.
// 대부분의 객체지향 프로그래밍 언어는 클래스를 구성하는 맴버에 대해 public, private, protected 등의 접근 제한자를 사용해
// 공개 범위를 한정할 수 있다. but, JS는 그런거 없다.
var counter = (function() {
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

// private 변수는 외부로 노출되지 않는다.
console.log(counter.num);   // undefined

console.log(counter.increase());    // 1
console.log(counter.increase());    // 2
console.log(counter.decrease());    // 1
console.log(counter.decrease());    // 0

// ES6 모듈
/*
ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.

script 태그에 type="module" 어트리뷰트를 추가하면 로드된 JS파일은 모듈로서 동작한다.
모듈의 파일 확장자는 .mjs를 권장한다.
<script type="module" src."lib.mjs"></script>

IE를 포함한 구형 브라우저는 ES6을 지원하지 않으므로 Webpack, Babel 등을 이용해 ES5 형태로 바꿔준다.
*/
