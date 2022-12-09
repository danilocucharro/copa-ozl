const frmSorteio = document.querySelector("#formSorteio")
const sorteados = document.querySelector("#timesSorteados")
const jaFoiSorteado = []

frmSorteio.addEventListener("submit", (e) =>{
    e.preventDefault()
    if(times.length == 0){
        alert("Nenhum time foi cadastrado ainda!")
    }else{
        const sorteio = Math.floor(Math.random() * times.length)
        sorteados.innerText += `${times[sorteio]} \n`
    }   
})