// 배열 생성 방법
let array = new Array(3); // 사이즈 지정
console.log(array);

array = new Array(1, 2, 3); // 만든 아이템을 그대로 전달
console.log(array);

array = Array.of(1, 2, 3, 4, 5); // static 함수를 이용해서 생성
console.log(array);

const anotherArray = [1, 2, 3, 4]; // 배열 리터럴을 이용해서 생성
console.log(anotherArray);
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함! (오브젝트와 거의 같다고 볼 수 있음)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
