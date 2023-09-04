// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name} : 🍎`); // 객체 내에서 자기 자신을 지목할 때 this
//     }
// };

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name} : 🍊`); // 객체 내에서 자기 자신을 지목할 때 this
//     }
// };

// 생성자 함수
function Fruit(name, emoji) { // 생성자 함수는 대문자로 생성
    this.name = name; // 이전 short 와 동일하게 name 생략 가능 name = name -> name
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name} : ${this.emoji}`)
    };
    // return this; // 생략 가능 -> 생성자 함수에서는 자동으로 this 가 return
} 

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);