let hamburgerButton = document.getElementById('hamburger')
let navList =  document.getElementById('nav-list')
let aboutMeButton = document.getElementById('aboutMeButton')


let showNavList = () => {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', showNavList)

aboutMeButton.addEventListener('click', () => {
    window.location = '#about-me'
})