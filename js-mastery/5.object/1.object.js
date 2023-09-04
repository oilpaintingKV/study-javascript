// Object Literal { Key: value }
// new Object();
// Object.create();
// key - 문자, 숫자, 문자열 , 심볼
// value - 원시값, 객체 (함수)

let apple = {
    name: 'apple',
    'hello-bye': '✋',
    helloBye : '✋', // 상단 표기보다 이게 더 좋음
    0: 1,
    ['hello-bye1']: '✋',
}

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침뵤 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
apple['name'];

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple); // 이모지 없는 것 확인 가능