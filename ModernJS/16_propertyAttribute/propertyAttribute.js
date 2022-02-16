// JS 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// 프로퍼티의 상태란 프로퍼티의 값(value), 값의 갱신 여부(writable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다.

// 프로퍼티 어트리뷰트는 JS 엔진이 관리하는 내부 상태 값(meta-property)인 내부 슬롯 [[Value]], [[Writable]], [[Configurable]]이다.
// 따라서 직접 접근할 수는 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다.
const person = {
    name: 'Oh',
    address: 'Anyang'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));   // 첫 번째 매개변수 : 객체의 참조를 전달, 두 번째: 프로퍼티 키를 문자열로 전달
// {value: "Oh", writable: true, enumerable: true, configurable: true}

// 프로퍼티 동적 생성
person.region = 'Republic Of Korea';

// ES8 이전에는 하나의 프로퍼티에 대해 반환했는데, 이후로는 getOwnPropertyDescriptor's'를 붙여 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공한다.
console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: { value: 'Oh', writable: true, enumerable: true, configurable: true },
  address: {
    value: 'Anyang',
    writable: true,
    enumerable: true,
    configurable: true
  },
  region: {
    value: 'Republic Of Korea',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/

