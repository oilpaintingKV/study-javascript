// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다!
// Mixin!
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

class Animal {} // 클래스를 사용해도 프로토타입을 사용하는 것으로 볼 수 있다
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();
