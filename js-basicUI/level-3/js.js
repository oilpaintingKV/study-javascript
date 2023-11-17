const products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

const cardTitle = document.querySelectorAll('.card-tit');
const cardPrice = document.querySelectorAll('.card-price');

for (let i = 0; i < products.length; i++) {
  cardTitle[i].innerText = products[i].title;
  cardPrice[i].innerText = products[i].price;
}

// select
const selectProduct = document.querySelector('.select_prod');
const selectSize = document.querySelector('.select_size');

selectProduct.addEventListener('input', (e) => {
  const value = e.currentTarget.value;

  // shirt
  if (value === 'nice shirt') {
    selectSize.classList.add('show');

    selectSize.innerHTML = '';

    let shirtOption = ` <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>`;
    selectSize.insertAdjacentHTML('beforeend', shirtOption);
  } else if (value == 'nice pants') {
    selectSize.classList.add('show');

    selectSize.innerHTML = '';

    // 1. create Element
    let optionTag = document.createElement('option');
    optionTag.innerHTML = '28';
    selectSize.appendChild(optionTag);

    // 2. insertAdjacentHTML
    let size30 = '<option>30</option>';
    selectSize.insertAdjacentHTML('beforeend', size30);
  } else {
    selectSize.classList.remove('show');
  }
});

// create html - createElement (more faster)
let a = document.createElement('p');
a.innerHTML = 'hello';
document.querySelector('#test').appendChild(a);

// create html - insertAdjacentHTML
let template = '<p>hi~</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', template);
