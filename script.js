let number = document.querySelector(".number")
const minus = document.querySelector('.minus-button')
const plus = document.querySelector('.plus-button')
const reset = document.querySelector('.reset')
const input = document.querySelector('.input')


minus.addEventListener('click', ()=>{
    const newNumber = parseInt(number.innerText)
    const changeByValue = parseInt(input.value)
    number.innerText = newNumber - changeByValue
})

plus.addEventListener('click', ()=>{
    const newNumber = parseInt(number.innerText)
    const changeByValue = parseInt(input.value)
    number.innerText = newNumber + changeByValue
})

reset.addEventListener('click', () => {
    number.innerText = 0
})