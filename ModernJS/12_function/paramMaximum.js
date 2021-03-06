// 12.5.3. 매개변수의 최대 개수
/*
함수의 매개변수는 코드를 이해하는 방해되는 요소이므로 이상적인 매개변수 개수는 0개이며 적을수록 좋다.
매개변수의 개수가 많단느 것은 함수가 여러 가지 일을 한다는 증거이므로 바람직하지 않다.
이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.
따라서 매개변수는 최대 3개 이상을 넘지 않는 것을 권장한다.
만약 그 이상의 매개변수가 필요하다면 하나의 매개변수를 선언하고 객체를 인수로 전달하는 것이 유리하다.
*/

// jQuery의 ajax 메서드에 객체를 인수로 전달하는 예 - 아직 안 배움.
/* 
$.ajax({
    method: 'POST',
    url: '/user',
    data: { id: 1, name: 'Oh'},
    cache: false
});
*/
