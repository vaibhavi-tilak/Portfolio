/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */
const navMENU = document.getElementById('nav-menu')
const navTOGGLE = document.getElementById('nav-toggle')
const navCLOSE = document.getElementById('nav-close')

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navTOGGLE){
    navTOGGLE.addEventListener('click', ()=>{navMENU.classList.add('show-menu')})
    //Initially we placed bottom -100% so menu is not visible.
    //When it is clicked the bottom value changed to 0 and so it got visible.
}
if(navCLOSE){
    navCLOSE.addEventListener('click', ()=>{navMENU.classList.add('hide-menu')})
}

/*==================== REMOVE MENU MOBILE ====================*/
console.log('hello')
const navLink = document.querySelectorAll('.nav__link')
function hideMenu(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click',hideMenu));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 60;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
  
/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 

// get the counter section element
const counterSection = document.querySelector('.about');

// detect when the section is in view
function isSectionInView() {
  const sectionTop = counterSection.getBoundingClientRect().top;
  const sectionBottom = counterSection.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  return (sectionTop < windowHeight && sectionBottom > 0);
}

// add a class to trigger the animation when the section is in view
function animateCounter() {
  if (isSectionInView()) {
    counterSection.classList.add('animate');
  }
}

// run the animateCounter function on load and scroll events
window.addEventListener('load', animateCounter);
window.addEventListener('scroll', animateCounter);


/*==================== DARK LIGHT THEME ====================*/ 