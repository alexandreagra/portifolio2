//HEADER FUNCTION
const body = document.body
let lastScroll = 0

window.addEventListener('scroll', () =>{
    const currentScroll = window.scrollY

    if(currentScroll <= 0){
        body.classList.remove('scroll-up')
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll
})

//OPEN MODAL PROG

const modalprog = document.querySelector('.prog-skills')
modalprog.addEventListener('click', openModal)

function openModal() {
    document.querySelector('#prog-modal').style.display = 'flex'
}

//CLOSE MODAL PROG
const closeModal = document.querySelector('.close-btn-prog')
closeModal.addEventListener('click', modalc)
const closeModalOut = document.querySelector('#prog-modal')
closeModalOut.addEventListener('click', modalc)

function modalc() {
    document.querySelector('#prog-modal').style.display = 'none'
}







