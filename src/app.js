let hamburgerButton = document.getElementById('hamburger')
let navList =  document.getElementById('nav-list')

let showNavList = () => {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', showNavList)