function execute() {
  console.log('1');
  setTimeout(() => { // 비동기 적으로 코드를 수행할 수 있음
    console.log('2');
  }, 2000);
  console.log('3');
}
execute();
