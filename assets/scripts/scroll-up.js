// // Get the button
// const scrollUpBtn = document.getElementById("scrollUpBtn");

// // Show the button when user scrolls down 200px
// window.onscroll = function() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     scrollUpBtn.style.display = "block";
//   } else {
//     scrollUpBtn.style.display = "none";
//   }
// };

// // When clicked, scroll smoothly to top
// scrollUpBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });




// scroll-up.js

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('scrollUpBtn');
  if (!btn) return;

  const lottieEl = document.getElementById('scrollUpAnim');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If Lottie component is present, mark as ready once it upgrades
  if (lottieEl) {
    const markReady = () => btn.classList.add('lottie-ready');
    // Web component upgrades asynchronously; wait until it's defined
    if (customElements && customElements.whenDefined) {
      customElements.whenDefined('dotlottie-wc').then(markReady).catch(markReady);
    } else {
      markReady();
    }

    // Respect reduced motion: pause / prevent autoplay if user prefers reduced motion
    if (prefersReduced) {
      // Remove autoplay and pause if supported
      lottieEl.removeAttribute('autoplay');
      if (typeof lottieEl.pause === 'function') {
        lottieEl.pause();
      }
    }
  }

  // --- Visibility logic ---
  const THRESHOLD = 200; // px scrolled before showing
  const useFade = true;  // set false to use display on/off like your original

  function showBtn() {
    if (useFade) {
      btn.classList.remove('is-hidden');
      btn.classList.add('is-visible');
    } else {
      btn.style.display = 'block';
    }
  }

  function hideBtn() {
    if (useFade) {
      btn.classList.remove('is-visible');
      btn.classList.add('is-hidden');
    } else {
      btn.style.display = 'none';
    }
  }

  function onScroll() {
    const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrolled > THRESHOLD) showBtn();
    else hideBtn();
  }

  // Init + bind
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Smooth scroll to top
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});