AOS.init();

const cont = document.querySelector('.swiper-container');
const cursor = document.querySelector('.cursor');
const toggle = document.querySelector('#toggle');
const nav = document.querySelector('nav');
const rightChevron = document.querySelector('.right-chevron');
const leftChevron = document.querySelector('.left-chevron');

cont.addEventListener('mouseenter', e => {
  cursor.style.opacity = 1;
  cursor.classList.add('cursor-hover');
  cont.style.cursor = 'none';
  rightChevron.classList.add('right-chevron-slide');
  leftChevron.classList.add('left-chevron-slide');
});

cont.addEventListener('mouseleave', e => {
  cursor.style.opacity = 0;
  cursor.classList.remove('cursor-hover');
  cont.style.cursor = 'auto';
  rightChevron.classList.remove('right-chevron-slide');
  leftChevron.classList.remove('left-chevron-slide');
});

cont.addEventListener('mousemove', e => {
  const posX = e.pageX;
  const posY = e.pageY;
  cursor.style.transform = `translate3d(${posX - 30}px, ${posY -30}px, 0)`;
});


toggle.addEventListener('change', e => {
  if(e.target.checked){
  	nav.style.height = '30.2rem';
  }else{
  	nav.style.height = '6rem';
  }
});






