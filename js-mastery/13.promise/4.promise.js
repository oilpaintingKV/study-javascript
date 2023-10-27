function runInDelay(seconds) { 
  return new Promise((resolve, reject) => { // 두 가지 인자를 전달 (resolve 성공 / reject 실패)
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!')) // 끝이 났다면
  .catch(console.error) // 에러가 발생했다면
  .finally(() => console.log('끝났다!')); // 최종적으로 (성공 / 실패에 상관 없이 최종적으로 무조건 호출)