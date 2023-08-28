let b; // 선언문
b = 2; // 표현식, 할당문

// let a = let b; 값 밖에 할당할 수 없다 -> 해당 선언문은 값으로 평가 X 그러므로 들어올 수 없음
let a = (b = 2);
console.log(a);