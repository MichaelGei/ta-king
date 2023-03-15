// to Highlight Current Page's nav-link
const eachNavLink = document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})
// Navbar Scrolled down Effect
// console.log('Hello World')
const nav = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 1) {
        nav.classList.add('scrolled')
    } 
    else{
        nav.classList.remove('scrolled');
    }
}
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

/*
  // navbar-nav-projects
navbarNavProjects.addEventListener('click', function(){
  message('#navbar-nav-projects .dropdown-menu-1')
})

  // navbar-nav-projects-pre-sale
navbarNavProjectsPreSale.addEventListener('click', function(){
    message('#navbar-nav-projects-pre-sale .nav-link + .dropdown-menu-2')
  })

  // navbar-nav-projects-in-development
navbarNavProjectsInDevelopment.addEventListener('click', function(){
    message('#navbar-nav-projects-in-development .nav-link + .dropdown-menu-2')
})

  // navbar-nav-projects-finished
navbarNavProjectsFinished.addEventListener('click', function(){
  message('#navbar-nav-projects-finished .nav-link + .dropdown-menu-2')
})

  // navbar-nav-blog
navbarNavBlog.addEventListener('click', function(){
  message('#navbar-nav-blog .dropdown-menu-1')
})
*/

  // toggle-nav-projects
toggleNavProjects.addEventListener('click', function(){
  message('#toggle-nav-projects .dropdown-menu-1')
})
  // toggle-nav-projects-presale
toggleNavProjectsPresale.addEventListener('click', function(){
  message('#toggle-nav-projects-presale .dropdown-menu-2')
})
  // toggle-nav-projects-in-development
toggleNavProjectsInDevelopment.addEventListener('click', function(){
  message('#toggle-nav-projects-in-development .nav-link + .dropdown-menu-2')
})
  // toggle-nav-projects-finished
toggleNavProjectsFinished.addEventListener('click', function(){
  message('#toggle-nav-projects-finished .nav-link + .dropdown-menu-2')
})
  // toggle-nav-blog
toggleNavBlog.addEventListener('click', function(){
  message('#toggle-nav-blog .nav-link + .dropdown-menu-1')
})

/*
navbarNavBlog.addEventListener('click', function(){
  message('.navbar-nav #blog-link.dropdown-1 .dropdown-menu-1')
})
let projects = document.querySelectorAll('.dropdown-1').forEach(item => {
  item.addEventListener('click', function() {
    message('.dropdown-menu-1')
  })
})
*/

// to Open toggle-btn
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
    toggleBtn.querySelectorAll('span').forEach((span) => span.classList.toggle('open'))
});

// to Slide down toggle-nav
const barTop = document.getElementsByClassName('toggle-btn')[0];
const toggleNav = document.getElementsByClassName('toggle-nav')[0];
barTop.addEventListener('click', () => {
    toggleNav.classList.toggle('active')
});


//  Animate On Scroll AOS 
AOS.init({
  offset: 100,
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

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('show-tab-content')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('show-tab-content')
    
  })
})
