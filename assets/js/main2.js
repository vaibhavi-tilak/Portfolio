// Toggle mobile menu open/close
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when clicking a navigation link (mobile)
document.querySelectorAll('.nav__link').forEach(link => 
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
);

// Qualification tabs switching
const tabs = document.querySelectorAll('.qualification__button');
const contents = document.querySelectorAll('.qualification__content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove active class from all
    tabs.forEach(t => t.classList.remove('qualification__active'));
    contents.forEach(c => c.classList.remove('qualification__active'));

    // Add active class to clicked tab and associated content
    tab.classList.add('qualification__active');
    target.classList.add('qualification__active');
  });
});

// Initialize AOS animation (called in inline script in HTML)

/* If you want to add further JS features like skill accordions, 
   or dynamic CSR image upload & gallery display, let me know! */
