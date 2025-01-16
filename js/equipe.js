let clicks = document.querySelectorAll("div.menbros ul li")
let as = document.querySelectorAll("div.menbros ul li a")
let containers = document.querySelectorAll("div.descricao div.geral")

as.forEach(toque => {
    toque.addEventListener("click", function(event){
      event.preventDefault()
    })
});
clicks.forEach(toque => {
    toque.addEventListener("click", ()=>{
        id = toque.getAttribute('valor')
        liC = toque.getAttribute('id')
        removerAtivoLi()
        adicionarAtivoLi(liC)
        removerAtivoCon()
        adicionarAtivoCon(id)
    })
});

function removerAtivoLi() {
    clicks.forEach(toque => {
        toque.classList.remove("ativo")
    });
}
function removerAtivoCon() {
    containers.forEach(view => {
        view.classList.remove("ativo")
    });
}
function adicionarAtivoLi(id) {
    li = document.querySelector("#"+id)
    li.classList.add('ativo')
}
function adicionarAtivoCon(id) {
    con = document.querySelector("#"+id)
    con.classList.add('ativo')
}