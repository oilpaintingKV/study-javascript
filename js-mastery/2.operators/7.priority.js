let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 14

result = a ++ + b * 4;
console.log(result); // 14

// 우선순위를 높이고 싶다면? ()
a = 2;
b = 3;
result = ((a + b) * 4) / 5;
console.log(result); // 4
