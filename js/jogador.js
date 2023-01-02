class Jogador {

    constructor() {
        this.id = 1,
        this.listaJogadores = []
    }

    salvar(){
        let jogador = this.lerDados();

        if(this.validarCampo(jogador)){
            this.adicionarJogador(jogador);
        }
        console.log(this.listaJogadores);

        this.listarJogador()
    }

    lerDados(){
        let jogador = {}

        jogador.id = this.id
        jogador.nomeJogador = document.querySelector('#nome').value
        jogador.pontos = 0
        jogador.jogos = 0
        jogador.vitorias = 0
        jogador.empates = 0
        jogador.derrotas = 0
        jogador.golsPro = 0
        jogador.golsContra = 0

        return jogador;
    }

    adicionarJogador(jogador){
        this.listaJogadores.push(jogador);
        this.id++
    }

    listarJogador(){
        let tbody = document.querySelector('#tbody')
        tbody.innerText = ""

        for(let i = 0; i<this.listaJogadores.length; i++){//PERCORRER TODOS OS ELEMENTOS DO ARRAY
            let tr = tbody.insertRow();
            let tdNome = tr.insertCell();
            let tdPontos = tr.insertCell();
            let tdJogos = tr.insertCell();
            let tdVitorias = tr.insertCell();
            let tdEmpates = tr.insertCell();
            let tdDerrotas = tr.insertCell();
            let tdGp = tr.insertCell();
            let tdGc = tr.insertCell();

            tdNome.innerText = this.listaJogadores[i].nomeJogador
            tdPontos.innerText = this.listaJogadores[i].pontos
            tdJogos.innerText = this.listaJogadores[i].jogos
            tdVitorias.innerText = this.listaJogadores[i].vitorias
            tdEmpates.innerText = this.listaJogadores[i].empates
            tdDerrotas.innerText = this.listaJogadores[i].derrotas
            tdGp.innerText = this.listaJogadores[i].golsPro
            tdGc.innerText = this.listaJogadores[i].golsContra
        }
    }

    validarCampo(jogador){
        let msg = ""

        if(jogador.nomeJogador == ""){
            msg += "Insira um nome para o jogador"
        }

        if(msg != ""){
            alert(msg)
            return false
        }
        return true
    }

}

const jogador = new Jogador()