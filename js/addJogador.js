const frmNome = document.querySelector("#formNome")
const jogadores = []

let pontos = 0
let jogos = 0
let vitorias = 0
let empates = 0
let derrotas = 0
let sg = 0

frmNome.addEventListener("submit", (e) =>{
    e.preventDefault()

    if(frmNome.nome.value == ""){
        alert("Insira um nome válido!")
    }else{
        const nomeJogador = frmNome.nome.value

        jogadores.push({
            nomeJogador,
            pontos,
            jogos,
            vitorias,
            empates,
            derrotas,
            sg
        })

        frmNome.nome.value = ""

        console.log(jogadores)
    }
})