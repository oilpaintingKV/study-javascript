// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 2 -> 만약 외부에서 값이 정해지면 외부 값으로 바로 arguments 설정
function add(a = 1, b = 2) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a + b;
}

add (2, 2);

// Rest매개변수 Rest Parameters -> 배열로 받아오기
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);