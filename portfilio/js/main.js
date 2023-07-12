'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const overlayA = document.querySelector('.overlay-a');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  overlayA.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });


  // Intersection Observer API //

  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.7,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));


}