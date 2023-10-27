// Iterable 하다는건! 순회가 가능하다는 것!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체다! 라는것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있다 for..of, spread
// 직접 구현할 일은 거의 없음

const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기!
const iterator = array.values();
while (true) {
  const item = iterator.next(); // item 들을 하나씩 받아서
  if (item.done) break; // 끝나면 break로 종료
  console.log(item.value);
}

for (let item of array) {
  console.log(item);
}

for (let item of array.values()) {
  console.log(item);
}

const obj = { id: 123, name: 'oilpaintingkim' };
for (const key in obj) {
  console.log(key);
}
