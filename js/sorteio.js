const frmSorteio = document.querySelector("#formSorteio")
const sorteados = document.querySelector("#timesSorteados")
const jaFoiSorteado = []
let sorteio

frmSorteio.addEventListener("submit", (e) =>{
    e.preventDefault()
    if(times.length == 0){
        alert("Nenhum time foi cadastrado ainda!")
    } 
    else{
        sorteio = Math.floor(Math.random() * times.length)

        if(jaFoiSorteado.includes(sorteio)){
            sorteados.innerText +=""
        }
        else{
            jaFoiSorteado.push(sorteio)
            sorteados.innerText += `${times[sorteio]} \n`
            console.log("ja foi sorteado: "+ jaFoiSorteado)
        }
        if(jaFoiSorteado.length == jogadores.length){
            frmSorteio.btnSubmitSorteio.disabled = true
        }
    }
})