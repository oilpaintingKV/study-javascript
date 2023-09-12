// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다. -> 필요하지 않는다면 원시값으로 되돌아감
const number = 123; // number 원시 타입
console.log(number.toString()); // number 원시타입을 감싸고 있는 Number 객체로 감싸짐 -> 다양한 함수 사용 가능
console.log(number); // 다시 number 원시 타입

const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
console.log(text.length);
text.trim();

