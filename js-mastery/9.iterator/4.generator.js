// generator -> 생성기
// 직접 구현할 일은 거의 없음

// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() { // 제너레이터 생성
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) { // catch 문을 사용하여 error 처리
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // 끝내기
multiple.throw('Error!'); // multiple 안으로 error를 전달할 수 있다. (밖에서도 제어할 수도 있음)

next = multiple.next();
console.log(next.value, next.done);
