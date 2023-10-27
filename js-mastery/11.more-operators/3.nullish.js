// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined 일 경우에만!
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // or 연산자를 사용하면 false로 간주되어서 0이라는 값이 있음에도 불구하고 undefined 값으로 뜨여짐
console.log(num ?? '-1');
