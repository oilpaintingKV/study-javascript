// car
let car = ['k5', 50000, 'white'];
let car2 = { name: 'lay', price: 50000, color: 'white' }; // key : value
let card = document.querySelector('.card');

console.log(car);
console.log(car2.name);

card.innerText = `name : ${car2.name} / price : ${car2.price} / color : ${car2.color}`;

// tab
let tabList = document.querySelector('.list');
let tabBtn = document.querySelectorAll('.tab-button');
let tabCont = document.querySelectorAll('.tab-content');
