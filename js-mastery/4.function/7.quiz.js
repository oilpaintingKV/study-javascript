// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

// 개인 문풀
// function iterate(max, action) {
//     let result = action (max);
//     console.log(result);
//     return result;
// }

// function print(max) {
//     for (let i = 0; i < max; i++) {
//         console.log(i)
//     }
// }

// function double(max) {
//     for (let i = 0; i < max; i++) {
//         console.log(i*2);
//     }
// }

// iterate(5, print);
// iterate(5, double);

// 최종 답
function iterate(max, action) { // 순회 조건은 동일하니 해당 콜백 함수 내에서 순회하는 문 작성
    for(let i = 0; i < max; i++) {
        action(i)
    }
}
function log(num) {
    console.log(num);
}

function doubleLog(num) {
    console.log(num * 2);
}

iterate(5, log); // iterate(5, (num) => console.log(num)); 동일
iterate(5, doubleLog); // iterate(5, (num) => console.log(num * 2)); 동일

setTimeout(() => {
    console.log('1초뒤 이 함수가 실행될거예요')
}, 1000); // setTimeout(콜백함수, 시간) 그렇다면 setTimeout은? 고차함수!