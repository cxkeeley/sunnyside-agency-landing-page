
const menuBtn = document.querySelector('.menu-btn');
const navBtn = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navBtn.classList.remove('open');
    menuOpen = false;
  }
});