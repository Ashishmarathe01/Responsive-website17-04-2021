burger=document.querySelector('.burger')
navlist = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.right-nav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-resp');
})
