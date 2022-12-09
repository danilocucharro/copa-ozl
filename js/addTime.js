const frmTime = document.querySelector("#formTime")
const times = []

frmTime.addEventListener("submit", (e) => {
    e.preventDefault()

    if(frmTime.time.value == ""){
        alert("Insira um Time válido!")
    }else {
        const nomeTime = frmTime.time.value

        times.push(nomeTime)
        frmTime.time.value = ""
        console.log(times)
    }
})