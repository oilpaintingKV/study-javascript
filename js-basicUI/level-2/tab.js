// tab
let tabBtn = document.querySelectorAll('.tab-button');
let tabCont = document.querySelectorAll('.tab-content');

// for
for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', () => {
    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove('orange');
      tabCont[j].classList.remove('show');
    }
    tabBtn[i].classList.add('orange');
    tabCont[i].classList.add('show');
  });
}

// for each
// tabBtn.forEach((tab, idx) => {
//   tab.addEventListener('click', function () {
//     tabCont.forEach((cont) => {
//       cont.classList.remove('show');
//     });
//     tabBtn.forEach((btn) => {
//       btn.classList.remove('orange');
//     });
//     tabBtn[idx].classList.add('orange');
//     tabCont[idx].classList.add('show');
//   });
// });
