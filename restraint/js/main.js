'use strict';

{
  // overlay //
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  // hero //
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length -1) {
          currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    },5000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();


  // Intersection Observer API //

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        hero.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        hero.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');


  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));


}