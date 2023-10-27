'use strict'; // 원하는 부분에만 사용도 가능이지만, 웬만하면 전체 페이지 상단에서 사용함
// 엄격 모드 strict mode
// 리액트와 같은 프레임워트 사용시 기본적으로 엄격 모드임
// var x = 1;
// delete x; // 엄격모드에서 해당 처럼 키워드로 삭제 불가

function add(x) {
  var a = 2;
  var b = a + x; // b = a + x -> strict 모드에서는 키워드 생략도 불가함
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (const num of array) { // num of array -> 해당 사항도 키워드 생략이 불가함
  console.log(num);
}
