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
const shirt = [95, 100, 105, 110];
const pants = [28, 30, 32, 34];

selectProduct.addEventListener('input', (e) => {
  const value = e.currentTarget.value;

  // shirt
  if (value === 'nice shirt') {
    selectSize.classList.add('show');

    selectSize.innerHTML = '';

    shirt.forEach(function (item, idx) {
      selectSize.insertAdjacentHTML(
        'beforeend',
        `<option>${idx + 1} : ${item}</option`
      );
    });
  } else if (value == 'nice pants') {
    selectSize.classList.add('show');

    selectSize.innerHTML = '';

    pants.forEach(function (item, idx) {
      selectSize.insertAdjacentHTML(
        'beforeend',
        `<option>${idx + 1} : ${item}</option`
      );
    });
  } else {
    selectSize.classList.remove('show');
  }

  let obj = { name: 'kim', age: 20 };

  for (let key in obj) {
    console.log(obj[key]);
  }
});
