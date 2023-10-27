// Map
// 키와 값을 가지고 있는 자료구조
// 순서 X
// 중복 O
// 유일한 키 하나를 반드시 가지고 있어야 된다
// map 과 object 유사함
// key 를 이용하여 조작

const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인 size
console.log(map.size);

// 존재하는지 확인 has(key)
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회 forEach (value 뿐만아니라 key 도 받아올 수 있음)
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries()); // key value 를 전부 가져와라

// 찾기 get
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?? -> 구조상으로서는 유사하지만, 사용하는 함수가 다름
// object
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj);

// map
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));
