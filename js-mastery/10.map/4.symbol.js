// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key'); // symbol을 이용하여 key 라는 유일한 키 생성
const key2 = Symbol('key'); // 같은 이름의 key 지만, 서로 근본적으로 다름
map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// symbol이 가지고 있는 문자열을 알고 싶다면? -> 레지스트리를 통해 생성한 심볼로만 가능
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]); // 받아올 수 없음 undefined -> 전혀 다른 키이기 때문에

