function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //return Promise.resolve(`🪴 => 🐓`);
}

getChicken()
  .catch(() => '🐔') // 에러를 발견하면? 에러 값을 작성해주고 싶다면 error.name
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
