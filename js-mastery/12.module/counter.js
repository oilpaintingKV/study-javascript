let count = 0;
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}

// 만약 한가지만 export 하고 싶다면 export default 로 작성해주면 됨