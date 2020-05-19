var swiper = new Swiper('.swiper-container', {
  effect: 'cube', 
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  flipEffect: {
    rotate: 30,
    slideShadows: false,
  },
});