// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 화살표 함수 const name = () => { }
let add = function (a, b) { // 무명 함수 할당 -> 만약 이름이 있는 함수를 할당하더라도 할당 된 함수 이름으로 진행됨
    return a + b;
}
console.log(add(1, 2));

add = (a, b) => {
    return a + b;
}
console.log(add(2, 2));

// 이렇게 생략도 가능하다!
add = (a, b) =>  a + b;

// 생성자 함수 const object = new Function(); // 뒤 객체 편에서 다룸

// IIFE (Immediately-Invoked Function Expressions) 바로 호출 함수
// 바로 즉각적으로 함수 실행이 필요할 때
(function run() {
    console.log('🙏');
})();