// set initial count
let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        console.log(event.currentTarget)
    })
})
