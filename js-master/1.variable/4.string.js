// 문자열 타입
let string = '안녕하세요';
string = `안녕@`;
console.log(string);

// 특수 문자 출력하는법
string = '"안녕"';
console.log(string);

string = '안녕!\noilpainting 이야';
console.log(string)

string = '안녕!\noilpainting 이야\t\t내 이름은\\\u0923';
console.log(string)

// 템플릿 리터럴
let id = 'oilpainting';
let greetings = "'안녕!," + id + "hi \n 즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}🍎
즐거운 하루 보내요!`
console.log(greetings);