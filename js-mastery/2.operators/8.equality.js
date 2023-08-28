// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true 담고있는 2의 값은 똑같기 때문에 true
console.log(2 === '2'); // false // 값은 같지만 type은 다르기 때문에 false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();
const obj1 = {
    name: 'js',
}

const obj2 = {
    name: 'js',
}

console.log(obj1 == obj2); // false 변수에는 메모리 주소가 들어있기 때문에 다른 메모리 주소를 가지고 있어서 false 값이 출력
console.log(obj1 === obj2); // false 애초에 값 자체가 달라서 false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj3 == obj2); // true 동일한 메모리주소
console.log(obj3 === obj2); // true 동일한 메모리주소 동일한 타입


