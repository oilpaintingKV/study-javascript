// 콜백 함수
// 콜백 함수란? 내가 나중에 호출해줄게 하는 함수라고 생각하면 편하다!
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) { // action 을 나중에 함수 안에서 호출
    if(a < 0 || b < 0) {
        return;
    }
    let result = action (a, b);
    console.log(result);
    return result;
}

calculator(1, 2, add); // 함수를 가지고 있는 주소를 전달
calculator(1, 2, multiply); // 어떤걸 전달하느냐에 따라서 실행되는 함수가 달라짐
calculator(-1, -2, add); // 조건이 다르기 때문에 미실행

