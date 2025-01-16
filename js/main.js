
let listaImagens = document.querySelectorAll(".galeria img")
let links = document.querySelectorAll(".galeria a")
let caixaVerFoto = document.querySelector("div.verFoto")
let sair = document.querySelector("div.verFoto button#sair")
let imagem = document.querySelector("div.verFoto img")
let body = document.querySelector("body")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let slider = listaImagens
let currentSlider = 0;


links.forEach(link => {
    link.addEventListener("click", (event)=> {
        event.preventDefault()
    })
})

listaImagens.forEach(listaimg => {
    listaimg.addEventListener("click", ()=> {
        let src = listaimg.getAttribute("src")
        abrirPop(src)
    })
})

function abrirPop(src) {
    body.style.overflowY = "hidden"
    caixaVerFoto.style.display = "flex"
    imagem.src = src
}

function fechar() {
    body.style.overflowY = "auto"
    caixaVerFoto.style.display = "none"
}

function hideSlider() {
    slider.forEach(item => {
        item.classList.remove("on")
    })
}

function showSlider() {
    slider[currentSlider].classList.add("on")
    let src = document.querySelector(".galeria img.on").getAttribute("src")
    imagem.src = src
}

function nextSlider() {
    hideSlider()
    if (currentSlider === slider.length - 1) {
        currentSlider = 0
    }
    else {
        currentSlider++
    }
    showSlider()
    console.log("next")
}

function prevSlider() {
    hideSlider()
    if (currentSlider === 0) {
        currentSlider = slider.length - 1
    }
    else {
        currentSlider--
    }
    showSlider()
    console.log("prev")

}

sair.addEventListener("click", fechar)
next.addEventListener("click", nextSlider)
prev.addEventListener("click", prevSlider)
