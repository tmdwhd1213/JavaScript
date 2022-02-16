console.log(score);     // undefined

var score;  // 변수 선언    >> undefined
score = 80; // 값 할당  >> 새로운 메모리 공간을 확보하고 그곳에 80의 값을 저장함. 
// var score = 80; 도 위와 같이 두 구간에 걸쳐 동작한다.

console.log(score);     // 80
// 변수 선언은 런타임 전에 실행되니 1줄은 초기화가 된 상태로 undefined가 출력되고
// 마지막 줄은 런타임 이후로 한 줄씩 실행되니 값이 할당된 상태로 80이 출력된다. 
