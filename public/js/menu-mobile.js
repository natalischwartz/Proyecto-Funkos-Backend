const openMenu = document.querySelector('#open-menu');
const aside = document.querySelector('aside');
const closeMenu = document.querySelector('#close-menu');


openMenu.addEventListener('click' , () =>{
    aside.classList.add('aside-visible')
})

closeMenu.addEventListener('click', ()=> {
    aside.classList.remove('aside-visible')
})
