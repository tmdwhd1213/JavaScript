const Person = (function() {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }


    // 프로토타입 메서드
    Person.prototype.sayHello = function() {
        console.log(`Hi! My name is ${this.name}`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Oh');

// 인스턴스 메서드
me.sayHello = function() {
    console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello();  // Hey! My name is ~

// 프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라
// 프로토타입 프로퍼티를 덮어쓰는 것이 아닌 인스턴스 프로퍼티로 추가된다.
// 인스턴스 메서드 sayHello는 프로토타입 메서드 sayHello를 오버라이딩했고 프로토타입 메서드는 가려진다.
// 이처럼 상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉이라 한다.
// 오버라이딩 : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식.
// 오버로딩 : 함수 이름은 동일하지만 매개변수의 타입 or 개수가 다른 메서드를 구현하고 매개변수에 의해 메스드를 구별하여 호출하는 방식.

// 인스턴스 메서드를 삭제한다.
delete me.sayHello;
// 인스턴스에는 sayHello 메서드가 없어졌으므로 프로토타입의 sayHello 메서드를 호출한다.
me.sayHello();  // Hi! My name is ~

// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
delete me.sayHello; // 에러가 발생하지 않음. 무시됨.
// 프로토타입 메서드가 호출된다.
me.sayHello();  // Hi! My name is ~

// 하위 객체를 통해 프로토타입에 get 엑세스(가져오기)는 허용되나 set 엑세스는 허용되지 않는다.
// 직접 프로토타입에 접근해야한다.

// 프로토타입 메서드 변경
Person.prototype.sayHello = function() {
    console.log(`Hello! My name is ${this.name}`);
};
me.sayHello();  // Hello! My name is Oh

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
// me.sayHello();       // TypeError: me.sayHello is not a function.