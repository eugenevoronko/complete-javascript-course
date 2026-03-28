'use strict';

///////////////////////////////////////
// DOM SELECTORS
///////////////////////////////////////

// Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Scroll & Navigation
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

// Sections & Images
const allSections = document.querySelectorAll('.section');
const lazyImages = document.querySelectorAll('img[data-src]');

// Tabs
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

///////////////////////////////////////
// 1. MODAL WINDOW
///////////////////////////////////////

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// 2. SMOOTH SCROLLING
///////////////////////////////////////

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// 3. NAVIGATION HOVER EFFECT
///////////////////////////////////////

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });

    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => handleHover(e, 0.5));
nav.addEventListener('mouseout', e => handleHover(e, 1));

///////////////////////////////////////
// 4. STICKY NAVIGATION
///////////////////////////////////////

// // Sticky navigation bad example with poor performance
// window.addEventListener('scroll', function () {
//   if (section1.getBoundingClientRect().top <= nav.offsetHeight) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

const observerCallback = function (entries, observer) {
  if (!entries[0].isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const observerOptions = {
  rootMargin: `-${nav.offsetHeight}px`,
};

const headerObserver = new IntersectionObserver(
  observerCallback,
  observerOptions,
);

headerObserver.observe(header);

///////////////////////////////////////
// 5. SECTION REVEAL ANIMATION
///////////////////////////////////////

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionsObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(section => {
  sectionsObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// 6. LAZY IMAGE LOADING
///////////////////////////////////////

function loadImg(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  });
}

const lazyImageObserver = new IntersectionObserver(loadImg, {
  rootMargin: '200px',
});

lazyImages.forEach(img => lazyImageObserver.observe(img));

///////////////////////////////////////
// 7. TABS
///////////////////////////////////////

const activateTab = function (tab) {
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  tab.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${tab.dataset.tab}`)
    .classList.add('operations__content--active');
};

tabContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (clicked) activateTab(clicked);
});

///////////////////////////////////////
// 8. SLIDER / CAROUSEL
///////////////////////////////////////
const slider = (() => {
  let currentSlideIndex = 0;
  const maxSlides = slides.length;

  // Slider functions
  const goToSlide = function (index) {
    slides.forEach((slide, slideIndex) => {
      slide.style.transform = `translateX(${(slideIndex - index) * 100}%)`;
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const navigate = function (step) {
    currentSlideIndex = (currentSlideIndex + step + maxSlides) % maxSlides;
    goToSlide(currentSlideIndex);
    activateDot(currentSlideIndex);
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('dots__dot');
      dot.dataset.slide = i;
      document.querySelector('.dots').appendChild(dot);
    });
  };

  const handleDotClick = function (e) {
    if (!e.target.classList.contains('dots__dot')) return;

    currentSlideIndex = parseInt(e.target.dataset.slide);
    goToSlide(currentSlideIndex);
    activateDot(currentSlideIndex);
  };

  const initSlider = function () {
    createDots();
    document.querySelector('.dots').addEventListener('click', handleDotClick);
    btnLeft.addEventListener('click', () => navigate(-1));
    btnRight.addEventListener('click', () => navigate(1));
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
    goToSlide(0);
    activateDot(0);
  };

  // Initialize slider
  initSlider();
})();
