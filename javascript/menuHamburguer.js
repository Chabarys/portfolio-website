const menu = document.querySelector('.menu-toggler')
const navbarMenu = document.querySelector('.navbar-menu')
const togglerClass = 'active'

menu.addEventListener('click', function() {
    if (this.classList.contains(togglerClass)) {
        this.classList.remove(togglerClass)
        navbarMenu.classList.remove(togglerClass)
    } else {
        this.classList.add(togglerClass)
        navbarMenu.classList.add(togglerClass)
    }
})