let button = document.querySelector("header nav button.hamburguer")
let itens = document.querySelector("header nav ul")
let header = document.querySelector("header")
let btnSubir = document.querySelector("a#btnSubir")

button.addEventListener("click", ()=>{
    button.classList.toggle('ativo')
    itens.classList.toggle('ativo')
})

window.addEventListener("scroll", ()=>{
    header.classList.toggle("rolagem", window.scrollY > 90)
})

window.addEventListener("scroll", ()=>{
    btnSubir.classList.toggle("subir", window.scrollY > 100)
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a[href^="#"]')

window.onscroll = () => {
     sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo');
                document.querySelector('header nav a[href*=' + id +']').classList.add('ativo');
            });
         };
     });
};

const menuItens = document.querySelectorAll('header nav a[href^="#"]')

menuItens.forEach(item => {
	item.addEventListener('click', rolagemPorClick);
})

function rolagemPorClick(event) {
    event.preventDefault();
	const element = event.target;
	const id = element.getAttribute('href')
	const to = document.querySelector(id).offsetTop;
	
	window.scroll({
	    top: to - 125,
	    behavior: 'smooth'
	});
}