const mainNav = document.querySelector('.main-nav');
const toggleWrapper = document.querySelector('.page-header__wrapper');
const navToggle = document.querySelector('.nav-toggle');

mainNav.classList.remove('main-nav--nojs');
toggleWrapper.classList.remove('page-header__wrapper--nojs');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    navToggle.classList.remove('nav-toggle--closed');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    navToggle.classList.remove('nav-toggle--opened');
    navToggle.classList.add('nav-toggle--closed');
  }
});
