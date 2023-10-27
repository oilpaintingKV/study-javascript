// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
// 의미있는 이름으로 변경, 순서 변경 등 유용

const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first); // fruits[0] 이런식으로 가져왔지만, 새로운 배열로 가져올 수 있음
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point; // 순서 변경, 기본 값 설정도 가능
console.log(x);
console.log(y);
console.log(z);

// 함수
function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

// object
const oilpaintingkim = { name: 'oilpaintingkim', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(oilpaintingkim);

const { name, age, job: occupation, pet = '강아지' } = oilpaintingkim;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}
changeColor(prop);
