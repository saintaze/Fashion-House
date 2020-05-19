const cont = document.querySelector('.swiper-container');
const cursor = document.querySelector('.cursor');
const toggle = document.querySelector('#toggle');

const rightChevron = document.querySelector('.right-chevron');
const leftChevron = document.querySelector('.left-chevron');


const slides = document.querySelectorAll('.slide');

slides.forEach(s => {
	console.log('s')
	s.style.pointerEvents = 'auto'
	s.addEventListener('dragstart', e => {

		console.log('heloo everyone')
	})
});

cont.addEventListener('mouseenter', e => {
	console.log(rightChevron)
	console.log(leftChevron)
  cursor.style.opacity = 1;
  cursor.classList.add('cursor-hover');
  cont.style.cursor = 'none';
  rightChevron.classList.add('right-chevron-slide');
  leftChevron.classList.add('left-chevron-slide');

  // console.log('mouseenter');
});

cont.addEventListener('mouseleave', e => {
  cursor.style.opacity = 0;
  cursor.classList.remove('cursor-hover');
  cont.style.cursor = 'auto';
  rightChevron.classList.remove('right-chevron-slide');
  leftChevron.classList.remove('left-chevron-slide');
  console.log('mouseleave');
});

cont.addEventListener('mousemove', e => {
  // console.log('mousemove')
  // console.log(e.clientX, e.pageY)
  const posX = e.clientX;
  const posY = e.clientY;
  cursor.style.transform = `translate3d(${posX - 30}px, ${posY -30}px, 0)`;
});


toggle.addEventListener('change', e => {
  if(e.target.checked){
  	cont.style.marginTop = '28.4rem';
  }else{
  	cont.style.marginTop = 0;
  }
});





