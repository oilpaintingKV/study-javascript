// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
// 동적(dynamic) / 약한(weakly) 타입
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // 동적으로 할당된 값에 따라 타입이 결정된다
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);
