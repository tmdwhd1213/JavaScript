// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 28;
    obj.name = 'Oh';
}

// 외부 상태
var num = 100;
var person = { name: 'Lee' };

console.log(num);   // 100
console.log(person);    // { name: "Lee" }

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시값은 원본이 훼손되지 않는다.
console.log(num);   // 100

// 객체는 원본이 훼손된다.
console.log(person);    // { name: 'Oh' }

// 원시 값처럼 불변하면 다행이지만 객체는 변할 수 밖에 없다.
// 이는 버그가 나는 원인이 될 수 있다.
// 이 문제의 해결 방법 중 하나는 불변 객체로 만드는 것이다.
// 객체의 복사본을 새롭게 생성하는 비용은 들지만,
// 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것이다.
// 이를 통해 객체의 상태 변경을 원천봉쇄하고 객체의 상태 변경이 필요한 경우에는
// 객체의 방어적 복사를 통해 원본 객체를 완저히 복제, 즉 깊은 복사를 통해
// 새로운 객체를 생성하고 재할당을 통해 교체한다. 이를 통해 외부 상태가 변경되는 부수 효과를 없앨 수 있다.