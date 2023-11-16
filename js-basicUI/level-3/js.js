// car
let car2 = { name: 'k5', price: [50000, 3000, 4000] }; // key : value
let price = document.querySelector('.price');

price.innerText = `price : ${car2.price[0]}`; // data binding (Put data into html)

// tab
let tabList = document.querySelector('.list');
let tabBtn = document.querySelectorAll('.tab-button');
let tabCont = document.querySelectorAll('.tab-content');
