const burger = document.querySelector('.navbar__btn');
const navList = document.querySelector('.navbar__list');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
  burger.classList.toggle('open');
});
