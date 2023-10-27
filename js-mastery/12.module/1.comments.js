// 주석 Comments
// 한줄 짜리 주석을 작성할 떄 씀
// TODO(oilpainting): 해야할 일을 작성
// TODO(oilpainting)): XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는것이 좋음
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음
// JSDoc -> 활용하여 인자나, 함수 등을 만들었을 때 해당 JSDoc 으로 작성해 주는 것도 좋음
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한값
 */

function add(a, b) {
  return a + b;
}
[].map;
