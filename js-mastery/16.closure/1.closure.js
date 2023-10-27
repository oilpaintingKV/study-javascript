// 내부 블럭에 대해서 외부 블럭을 접근 할 수 있음
const text = 'hello'; // 외부
function func() {
  console.log(text); // 내부
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner; // 참조값만 리턴한다면?
}
const func1 = outer(); // 참조값이 fuc1 에 
func1();
