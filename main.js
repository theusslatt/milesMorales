const hamburguer = document.querySelector('header__hamburguer')
const nav = document.querySelector('header__nav__links')

hamburguer.addEventListener('click', function (nav){
    nav.target.classList.add('header__nav__links--is-hidden')
})