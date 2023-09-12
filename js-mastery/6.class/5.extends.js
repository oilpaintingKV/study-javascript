// 클래스 확장

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

class Animal { // 공통 템플릿
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {} // 애니멀에서 상속한다
const tiger = new Tiger('주황줄무늬');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 상속하고 있는 부모 클래스(Animal)를 가르킨다
    this.ownerName = ownerName; // 해당 dog 클래스에만 설정해두는 것
  }

  play() { // 추가적으로 함수나 속성을 추가해 줄 수 있음
    console.log('놀자!');
  }

  // 오버라이딩 overriding
  eat() {
    super.eat(); // 부모의 기능을 가져오고 싶다면? super 이용하여 사용
    console.log('사료를 먹는다!'); // 신규로 필요한 일 생성
  }
}
const dog = new Dog('바둑이', 'oilpainting');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
