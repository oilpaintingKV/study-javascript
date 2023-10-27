// try catch finally
// 에러를 잡아보자~

function readFile(path) {
  // throw new Error('파일 경로를 찾을 수 없음'); // 에러 던지기
  return '파일의내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) { // 에러를 잡고 처리 해보자
    console.log(error); // 에러
    content = '기본내용'; 
  } finally { // 최종적으로 처리 할 내용
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!');
  }
  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);
