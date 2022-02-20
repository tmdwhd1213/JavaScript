// 실체는 특징이나 성질을 나타내는 속성(property)를 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.
// 예를 들어 사람은 이름, 주소, 성별, 나이, 신장, 체주으 학력, 성격 등 다양한 속성을 갖는다.
// 이때 이름이 오승종이고 성별은 남성이며 나이는 28세인 사람과 같이 속성을 구체적으로 표현하면 사람을 특정할 수 있다.
// 프로그래밍에 접목시켜보면 사람에게는 다양한 속성이 있으나 우리가 구현하려는 프로그래밍에는 "이름", "주소"라는 속성만 필요하다고 가정하자.
// 다양한 속성 중에서 필요한 것만 추려내어 표현하는 것을 추상화라고 한다.

// 객체 : 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조
// 객체지향 프로그래밍 : 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임

// circle이라는 개념을 객체로 만들 때, 반지름이라는 속성을 가지고 있다.
// 이 반지름을 가지고 지름, 둘레, 넓이를 구할 수 있다.
// 이때 반지름은 원의 상태를 나타내는 데이터이며 원의 지름, 둘레, 넓이를 구하는 것은 동작이다.

const circle = {
    radius: 5,  // 반지름
    
    getDiameter() {
        return 2 * this.radius;     // 지름
    },

    // 둘레
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },

    // 넓이
    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle);
// { radius: 5, getDiameter: [Function: getDiameter], getPerimeter: [Function: getPerimeter], getArea: [Function: getArea] }

console.log(circle.getDiameter());      // 10
console.log(circle.getPerimeter());     // 31.4159...
console.log(circle.getArea());          // 78.43981...

// 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다.
// 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조이다.
// 이때 객체의 상태 데이터는 property, 동작을 method라 부른다.

// 각 객체는 독립적인 부품으로 볼 수 있지만 자신의 고유한 기능을 수행하면서 다른 객체와도 상호 작용을 할 수 있다.

