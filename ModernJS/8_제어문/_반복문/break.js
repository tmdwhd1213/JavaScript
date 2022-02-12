// 레이블 문, 반복문 또는 switch문의 코드 블록을 탈출한다. 이외의 경우에서 사용할 시 SyntaxError가 발생.
/*
if(true) {
    break;      // SyntaxError : Illegal break statement
}
*/

// 레이블 문이란 식별자가 붙은 문을 뜻한다.
foo: console.log('foo');

// 레이블 문은 프로그램 실행 순서를 제어하는데 사용함. switch문의 case와 default도 레이블 문이다.
// 레이블 문을 탈출하려면 break문에 레이블 식별자를 지정한다.
foo: {
    console.log(1);
    break foo;  // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

//중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진입한다.
// 외부 for문으로 탈출하려면 레이블 문을 사용한다.

// outer라는 식별자가 붙은 레이블 for 문
outer: for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        // i + j ===3 이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');

// 문자열에서 특정 문자의 인덱스를 검색하는 예
var string = 'Hello World!';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for(var i = 0; i < string.length; i++) {
    // 문자열의 개별 문자가 'l'이면
    if(string[i] === search) {
        index = i;
        break;  // 반복문을 탈출한다.
    }
}

console.log(index); // 2

// String.Prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search));    // 2