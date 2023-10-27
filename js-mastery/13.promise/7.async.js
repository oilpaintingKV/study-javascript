function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나과 사과를 같이 가지고 오기 (async 사용하기)
async function fetchFruits() {
  const banana = await getBanana(); // await (기다려잇!)
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
