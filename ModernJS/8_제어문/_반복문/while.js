// while문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속 반복 수행한다. 거짓이되면 수행 종료.
// for문은 반복 횟수가 명확할 때, while은 불명확할 때 사용한다.

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
}   // 0 1 2
