function a() {
  for (let i = 0; i < 1000000000000000; i++); // 이렇게 오래 걸리게되는 경우는?? 동기적으로 시행이 되기 때문에 전체적으로 문제 생김
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c(); // c -> b -> a -> b -> c 총 결과는 3
console.log(result);

