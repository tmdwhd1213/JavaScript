// JS에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있다.
// JS 함수는 객체(일급 객체)이다. 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로도 사용할 수 있다.
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부른다.
var circle = {
    radius : 5,     // property

    // 원의 지름
    getDiameter : function() {  // 메서드
        return 2 * this.radius;     // this는 circle을 가리킨다.
    }
};

console.log(circle.getDiameter());      // 10