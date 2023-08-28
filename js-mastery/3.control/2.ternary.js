// 삼항 조건 연산자 Ternary Operator
// 조건식? 참인경우 : 거짓인 경우

let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log('⚽️');
}

fruit === 'apple' ? console.log('🍎') : console.log('⚽️');

let emoji = fruit === 'apple' ? '🍎' : '⚽️'; // 값이 할당됨
console.log(emoji);