// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'oilpainting' };

if (obj1 || obj2) {
  console.log('둘다 true!');
}

let result = obj1 && obj2; // true 니까 뒤에 (고양이)
console.log(result);

result = obj1 || obj2; // true 니까 앞에 (강아지)
console.log(result);

// 활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어'); // 에러
  }
  animal.owner = '바뀐 주인!';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어'); // 에러
  }
  animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); 
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price; // false 라면 앞 undefined 값 전달
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우
// || falshy한 경우 설정(할당) 0, -0, null, undefined, ''
function print(message = 'Hi') { // default 파라미터를 사용하면 오류를 방지할 수 있지 않을까?
  const text = message || 'Hello';
  console.log(text);
}
print('안녕!');
print();
print('');
