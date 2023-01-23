// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);
};

//Nav styles on scroll
const scrollHeader = () =>{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader)
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup
const formOpenBtn = selectElement('#Search-icon')
const formCloseBtn = selectElement('#form-close-btn')
const searchFormContainer = selectElement('#Search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});
// Switch theme/add to local storage
const bodyELEMENT = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme){
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  bodyELEMENT.classList.toggle('light-Theme');

  if(bodyELEMENT.classList.contains('light-Theme')){
    localStorage.setItem('currentTheme', 'themeActive');
    }else{
      localStorage.removeItem('currentTheme');
  }
});
// Swiper
