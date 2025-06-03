let mudarCor = document.querySelector(".mudar-cor")
let trocarAutomaticamente = document.querySelector(".trocar-automaticamente")
let intervalo = null
let trocandoAutomaticamente = false

function trocarCor(){
    let corAleatoria = Math.floor (Math.random()* 16777215).toString(16)
    document.body.style.backgroundColor = "#"+corAleatoria  
}

function trocaAutomatico(){
    if(trocandoAutomaticamente){
        clearInterval(intervalo)
        trocandoAutomaticamente = false
    } else {
        intervalo = setInterval(function(){
            let corAleatoria = Math.floor (Math.random()* 16777215).toString(16)
            document.body.style.backgroundColor = "#"+corAleatoria  
        }, 400)
        trocandoAutomaticamente = true
    }
}

mudarCor.addEventListener("click", trocarCor)
trocarAutomaticamente.addEventListener("click", trocaAutomatico)
