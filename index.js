
const openMenu = document.querySelector('._open-menu');
const closeMenu = document.querySelector('._close-menu');
const headerNav = document.querySelector('.header__nav');
const headerButonMenu = document.querySelector('.header__button-menu');
const headerNavListItemClose = document.querySelector('.header__nav-list-item_close');
const searchItemInput = document.querySelector('.search__input');
const body = document.querySelector('body');

const headerContainer = document.querySelector('.container');
const headerMask = document.createElement('div');
headerMask.className = 'mask';


headerButonMenu.addEventListener('click', (menuOpen) => {
  headerNav.classList.add('_open-menu');
  headerContainer.before(headerMask);
  headerMask.classList.add('_mask-on');
  searchItemInput.classList.add('low-index');
  body.classList.add('lock');
  menuOpen.preventDefault();
})

headerNavListItemClose.addEventListener('click', (menuClose) =>{
    headerNav.classList.remove('_open-menu');
    headerMask.remove();
    searchItemInput.classList.remove('low-index');
    body.classList.remove('lock');
    menuClose.preventDefault();
})


function convert(){

    let convert = document.querySelectorAll(".convert");
    for (var i = 0; i < convert.length; i++) {
    if(convert[i].querySelector('img')){
    convert[i].style.backgroundImage =
    'url('+convert[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    convert();
  
headerMask.addEventListener("click", () => {
  headerNav.classList.remove('_open-menu');
  headerMask.remove();
  body.classList.remove('lock');
  });
  
const navMenu = document.querySelector('.header__nav');
const input = document.querySelector(".search__item-input");
const placeholder =  input.getAttribute('placeholder');

const wrapper = document.querySelector(".wrapper");

const searchItemButton = document.querySelector(".search__item-button");
document.addEventListener('click', click);
function click() {
  if(!event.target.closest('.search__item-button, .search__item-input')){
blockInputValue = document.querySelector(".search__item-input").value = placeholder;
}else if (event.target.closest('.search__item-input')){
  blockInputValue = document.querySelector(".search__item-input").value = ' ';
}
};











