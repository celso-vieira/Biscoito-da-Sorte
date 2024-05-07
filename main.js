const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const bolacha = document.querySelector("#bolacha")
const button = document.querySelector("#button")



bolacha.addEventListener('click', openCookie)
button.addEventListener('click', openCookie)



function openCookie() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}