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


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 