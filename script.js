const head = document.querySelector('#header-global')
let scrollBar = window.scrollY

window.addEventListener("scroll", () => {
    if(scrollBar < window.scrollY) {
        nav.classList.add('header-global')
    } else {
        nav.classList.remove('header-global')
    }

    scrollBar = window.scrollY
})