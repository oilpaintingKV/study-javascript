// 접근제어자 - 캡슐화
// private(#), public(기본), protected
// private(#)? 내부에서는 사용이 가능하지만 외부 접근은 불가능한 상태
class Fruit {
  #name;
  #emoji;
  #type = '과일'; // 인스턴스를 만들 때 초기화시키고 싶다면? type = '과일' 과같이 사용 가능
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => { // display 도 캡슐화 가능
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함 (내부에서만)
console.log(apple);
