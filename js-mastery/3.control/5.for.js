// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드 블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때 까지 2번과 3번을 반복함

for(let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

// 무한 루프 💀
// for(;;) {
//     console.log('🤡');
// }

// 반복문 제어: continue, break;
for(let i = 0; i < 20; i++) {
    if(i === 10) {
        console.log('i가 드디어 10이 되었다!');
        // break; // 반복문을 특정한 조건에 그만두고 싶다면? break 사용
        continue; // 해당 continue 아래 있는 코드는 무시 되고 바로 다음으로 넘어감
    }
    console.log(i);
}