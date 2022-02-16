// continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다. break 문처럼 반복문을 탈출하지 않는다.

var string = 'Hello World';
var search = 'o';
var count = 0;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for(var i = 0; i < string.length; i++) {
    // 'o'가 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if(string[i] !== search) continue;
    count++;    // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 2

// String.Prototype.match 메서드를 이용하면 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);

// if문 내에서 실행할 코드가 길다면 들여쓰기를 한번 더 해야하므로 가독성이 안 좋아진다.
// 따라서 continue 문을 사용하는 것이 가독성이 더 좋다.

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for(var i = 0; i < string.length; i++) {
    // 'o'이면 카운트를 증가시킨다.
    if(string[o] === search) {
        count++;
        //code
        //code
        //code...
    }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for(var i = 0; i < string.length; i++) {
    // 'o'가 아니면 카운트를 증가시키지 않는다.
    if(string[o] !== search) continue;

    count++;
    //code
    //code...
}