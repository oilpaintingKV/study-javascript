// Bubbling up, Propagating 🧼
// 에러가 올라가는(전파되는)

function a() {
  throw new Error('error!');
}

function b() {
  try { // 해당 부분(근접한 곳)에서 캐치해도 됨
    a();
  } catch (error) {
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error; // 다시 에러를 던질 수 있음
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
