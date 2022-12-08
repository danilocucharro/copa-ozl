const frm = document.querySelector("#formNome")
const jogadores = []

let pontos = 0
let jogos = 0
let vitorias = 0
let derrotas = 0
let sg = 0

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nomeJogador = frm.nome.value

    jogadores.push({
        nomeJogador,
        pontos,
        jogos,
        vitorias,
        derrotas,
        sg
    })

    frm.nome.value = ""

    console.log(jogadores)
})