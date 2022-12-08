const frmSorteio = document.querySelector("#formSorteio")
const sorteados = document.querySelector("#timesSorteados")

frmSorteio.addEventListener("submit", (e) =>{
    e.preventDefault()

    const sorteio = Math.floor(Math.random() * times.length)
    sorteados.innerText += `${times[sorteio]} \n`
})