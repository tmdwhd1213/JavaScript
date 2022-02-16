// ES6 까지는 Math.pow 메서드를 이용하여 지수를 나타내었다.
console.log(Math.pow(2, 2));    // 4
console.log(Math.pow(4, 1/2));  // 2
console.log(Math.pow(2, 0));    // 1

//ES7이후로는 ** 연산자를 사용하여 지수를 나타낼 수 있다. >> 가독성이 더 좋아짐.
console.log(3 ** 2);    // 9
console.log(2 ** 2 ** 2);   // 16
console.log(Math.pow(Math.pow(2, 2), 2));   // 16

// 음수를 밑으로 사용하려면 소괄호()를 사용해야 한다.
console.log((-5) ** 2);     // () 안쓰면 SyntaxError남.

// 지수 연산자는 이항 연산자 중에서 우선순위가 제일 높다.
console.log(2 * 5 ** 2);    // 2 * 25 -> 50