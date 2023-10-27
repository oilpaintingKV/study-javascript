// 배열 추가 삭제
const fruits = ['🍌', '🍎', '🍇', '🍑']; // 주로 배열 리터럴 사용하여 생성

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩
fruits[6] = '🍓'; // 배열 인덱스 번호를 지정해서 추가하는 방식은 덮어쓰기 위험성, 비어있는 아이템 생성 위험 등이 있음
console.log(fruits);

delete fruits[1];
console.log(fruits); // 삭제 후에도 empty item 으로 남아있음
