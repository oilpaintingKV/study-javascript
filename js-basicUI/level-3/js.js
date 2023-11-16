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

  if (value === 'nice shirt') {
    selectSize.classList.add('show');
  } else {
    selectSize.classList.remove('show');
  }
});
