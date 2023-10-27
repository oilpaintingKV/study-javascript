// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName; // 변경
dog.printName(); // dog 객체에서 호출하는 것으로 변경되어 this.name 이 다르게 나옴 -> 누가 호출하냐에 따라서 다르다는 것을 보여줌
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName(); // 값은 undefined 가 나옴 -> 호출 한 사람이 없기 때문에
}

printOnMonitor(cat.printName); // cat.printName 참조값 전달
