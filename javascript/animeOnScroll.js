const target = document.querySelectorAll('[data-anime]')
const navbar = document.querySelector('.navbar')
const animationClass = 'animate'
const stickyClass = 'sticky'

window.addEventListener('scroll', function() {
    if (this.scrollY > 20) 
        navbar.classList.add(stickyClass)
    else
        navbar.classList.remove(stickyClass)
})

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4)
    target.forEach(element => {
        if (windowTop > element.offsetTop) 
            element.classList.add(animationClass)
         else 
            element.classList.remove(animationClass)
        
    })
}

animeScroll()

if (target.length) 
    window.addEventListener('scroll', debounce(() => animeScroll(), 100))
