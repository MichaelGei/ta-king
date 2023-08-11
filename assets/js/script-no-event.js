// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-DPDDNYMBW1');


// to Highlight Current Page's nav-link
const eachNavLink = document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})


// indexSwiper
const indexSwiper = new Swiper('#indexSwiper', {
  centeredSlides: true,
  speed: 1000,
  loop: true,
  spaceBetween: 50,
  watchSlidesProgress: true,
  preloadImages: false,
  lazy: true,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  lazy: {
      loadPrevNext: true,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
    modifier: 1,
  },
  navigation: {
    nextEl: '#nav-right',
    prevEl: '#nav-left',
  },
  pagination: {
    el: "#indexSwiper .swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">
      <span class="dot"></span>
      <span class="number">${index + 1}</span>
      </div>`
    },
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      watchOverflow: true,
    }
  },
})

const projectSwiper = new Swiper('#projectSwiper', {
  centeredSlides: true,
  speed: 500,
  loop: true,
  spaceBetween: 50,
  watchSlidesProgress: true,
  preloadImages: false,
  lazy: true,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  lazy: {
      loadPrevNext: true,
  },
  effect: 'fade',
  fadeEffect: {
    
  },
  navigation: {
    nextEl: '#nav-right',
    prevEl: '#nav-left',
  },
  pagination: {
    el: "#projectSwiper .swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">
      <span class="dot"></span>
      <span class="number">${index + 1}</span>
      </div>`
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1, 
      watchOverflow: true,
    }
  },
})



// Navbar Scrolled down Effect
// console.log('Hello World')
// const nav = document.querySelector('.navbar');

// window.onscroll = function(){
//     var top = window.scrollY;
//     console.log(top);
//     if (top >= 1) {
//         nav.classList.add('scrolled')
//     } 
//     else{
//         nav.classList.remove('scrolled');
//     }
// }

// Dropdown-menu

/*
  // navbar-nav-projects
let navbarNavProjects = document.querySelector('#navbar-nav-projects .nav-link');

  // navbar-nav-projects-for-sale
let navbarNavProjectsForSale = document.querySelector('#navbar-nav-projects-for-sale .nav-link');

  // navbar-nav-projects-in-development
let navbarNavProjectsInDevelopment = document.querySelector('#navbar-nav-projects-in-development .nav-link');

  // navbar-nav-projects-finished
let navbarNavProjectsFinished = document.querySelector('#navbar-nav-projects-finished .nav-link');

  // navbar-nav-blog
let navbarNavBlog = document.querySelector('#navbar-nav-blog .nav-link'); 
*/

  // toggle-nav-projects
let toggleNavProjects = document.querySelector('#toggle-nav-projects .nav-link');

  // toggle-nav-projects-presale
let toggleNavProjectsPresale = document.querySelector('#toggle-nav-projects-presale .nav-link');

  // toggle-nav-projects-in-development
let toggleNavProjectsInDevelopment = document.querySelector('#toggle-nav-projects-in-development .nav-link');

  // toggle-nav-projects-finished
let toggleNavProjectsFinished = document.querySelector('#toggle-nav-projects-finished .nav-link');

  // toggle-nav-blog
let toggleNavBlog = document.querySelector('#toggle-nav-blog .nav-link');

function message (selector) {
  let contentTarget = document.querySelector(selector);
  contentTarget.classList.toggle('show-hide')
}



//  Animate On Scroll AOS 
AOS.init({
  offset: 200,
  duration: 1000,
  mirror: false,
  easing: 'ease-out',
  once: false,
});

// tabs
const tabs = document.querySelectorAll('[data-tab-target]');
// nav-link

// const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
