// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0 : 월요일, 1: 화요일 ... 6 : 일요일
let dayName;
// if(day === 0) {
//     dayName = '월요일';
// } else if (day === 1) {
//     dayName = '화요일';
// } else if (day === 2) {
//     dayName = '화요일';
// } else if (day === 3) {
//     dayName = '화요일';
// } else if (day === 4) {
//     dayName = '화요일';
// } else if (day === 5) {
//     dayName = '화요일';
// } else if (day === 6) {
//     dayName = '화요일';
// }

switch(day) {
    case 0:
        dayName = '월요일';
        break; // break 하여 다른 조건으로 넘어가지 않도록
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '토요일';
        break;
}
console.log(dayName);

// break를 쓰지 않는 경우?? 여러가지 경우를 포함해야 된다면
let condition = 'okay'; // okay, good -> 좋음!, bad -> 나쁨!
let text;
switch(condition) {
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
    case 'bad':
        text = '나쁨!';
        break;
    default: // else 와 비슷하게 모든 조건에 포함되지 않을 경우
        console.log('해당하는 요일이 없음!');
}
console.log(text);